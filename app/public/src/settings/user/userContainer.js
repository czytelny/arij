import React from 'react';
import User from './user';
import UserEdit from './userEdit';
import {connect} from 'react-redux';
import actions from '../../../../shared/userActionCreators'
import messageActions from '../../app/messages/messagesActionCreators'
import {browserHistory} from 'react-router'
import _ from 'underscore'


const UserContainer = React.createClass({
  _addSocketListeners() {
    // socketHandler.on(MODIFY_USER_REQUEST_SUCCESS, () => {
    //   this.props.savingFinished();
    //   this.props.showSuccessMessage("User modified successfully!");
    // });
    // socketHandler.on(MODIFY_USER_REQUEST_FAILURE, (err) => {
    //   this.props.savingFinished();
    //   this.props.showErrorMessage(`Sorry, user modification failed: ${err}`);
    //   console.log("Modify user error: " + JSON.stringify(err));
    // });
  },
  componentDidMount() {
    if (this.props.userId) {
      this.props.getUserRequest(this.props.userId);
    } else {
      this.props.initializeNewUser();
    }
  },


  render() {
    if (_.isUndefined(this.props.userId)) {
      return (
        <User {...this.props}/>)
    } else {
      return (
        <UserEdit {...this.props}/>)
    }
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    getUserRequest: (userId) => dispatch(actions.getUserRequest(userId)),
    initializeNewUser: ()=> dispatch(actions.initializeNewUser()),
    showSuccessMessage: (message) => dispatch(messageActions.showSuccessMessage(message)),
    showErrorMessage: (message) => dispatch(messageActions.showErrorMessage(message)),
    nameChangeHandler: (event)=> dispatch(actions.userNameChanged(event.target.value)),
    emailChangeHandler: (event)=> dispatch(actions.userEmailChanged(event.target.value)),
    passwordChangeHandler: (event) => dispatch(actions.userPasswordChanged(event.target.value)),
    passwordConfirmChangeHandler: (event) => dispatch(actions.userPasswordConfirmChanged(event.target.value)),
    submitHandler: (event) => {
      event.preventDefault();
      dispatch(actions.validateUser());
      dispatch(actions.submitUser());
    },
    submitEditHandler: (event) => {
      event.preventDefault();
      dispatch(actions.validateUserEdit());
      dispatch(actions.submitUserEdit());
    }
  };
};

const mapStateToProps = function (store, ownProps) {
  return {
    user: store.userState.get("user"),
    userId: ownProps.userId,
    errors: store.userState.get("errors"),
    savingInProgress: store.userState.get("savingInProgress")
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
