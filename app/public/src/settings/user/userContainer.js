import React from 'react';
import User from './user';
import UserEdit from './userEdit';
import {connect} from 'react-redux';
import socketHandler from '../../app/socketHandler';
import actions from '../../../../shared/userActionCreators'
import messageActions from '../../app/messages/messagesActionCreators'
import {browserHistory} from 'react-router'
import _ from 'underscore'

import {
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  MODIFY_USER_REQUEST_SUCCESS,
  MODIFY_USER_REQUEST_FAILURE,
  GET_USER_REQUEST_FAILURE
} from '../../../../shared/userActionTypes'


const UserContainer = React.createClass({
  _fetchUser() {
    socketHandler.emit(GET_USER_REQUEST, this.props.userId);
  },
  _addSocketListeners() {
    socketHandler.on(ADD_USER_REQUEST_SUCCESS, () => {
      this.props.savingFinished();
      this.props.showSuccessMessage("User added successfully!");
      browserHistory.goBack();
    });
    socketHandler.on(ADD_USER_REQUEST_FAILURE, (err) => {
      this.props.savingFinished();
      this.props.showErrorMessage(`Sorry, adding user failed`);
      console.log("Add user error: " + JSON.stringify(err));
    });
    socketHandler.on(GET_USER_REQUEST_SUCCESS, (user) => {
      this.props.getUserRequestSuccess(user);
    });
    socketHandler.on(GET_USER_REQUEST_FAILURE, () => {
      this.props.savingFinished();
    });
    socketHandler.on(MODIFY_USER_REQUEST_SUCCESS, () => {
      this.props.savingFinished();
      this.props.showSuccessMessage("User modified successfully!");
    });
    socketHandler.on(MODIFY_USER_REQUEST_FAILURE, (err) => {
      this.props.savingFinished();
      this.props.showErrorMessage(`Sorry, user modification failed: ${err}`);
      console.log("Modify user error: " + JSON.stringify(err));
    });
  },
  componentDidMount() {
    if (this.props.userId) {
      this._fetchUser();
    } else {
      this.props.initializeNewUser();
    }
    this._addSocketListeners();
  },

  componentWillUnmount(){
    socketHandler.removeAllListeners(ADD_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(ADD_USER_REQUEST_FAILURE);
    socketHandler.removeAllListeners(GET_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(GET_USER_REQUEST_FAILURE);
    socketHandler.removeAllListeners(MODIFY_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(MODIFY_USER_REQUEST_FAILURE);
  },

  render() {
    if (_.isUndefined(this.props.userId)) {
      return (
        <User nameChangeHandler={this.props.nameChangeHandler}
              emailChangeHandler={this.props.emailChangeHandler}
              passwordChangeHandler={this.props.passwordChangeHandler}
              passwordConfirmChangeHandler={this.props.passwordConfirmChangeHandler}
              submitHandler={this.props.submitHandler}
              errors={this.props.errors}
              savingInProgress={this.props.savingInProgress}
              user={this.props.user}
        />)
    } else {
      return (
        <UserEdit nameChangeHandler={this.props.nameChangeHandler}
                  submitHandler={this.props.submitEditHandler}
                  errors={this.props.errors}
                  savingInProgress={this.props.savingInProgress}
                  user={this.props.user}
        />)
    }
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    initializeNewUser: ()=> dispatch(actions.initializeNewUser()),
    savingFinished: () => dispatch(actions.savingFinished()),
    showSuccessMessage: (message) => dispatch(messageActions.showSuccessMessage(message)),
    showErrorMessage: (message) => dispatch(messageActions.showErrorMessage(message)),
    nameChangeHandler: (event)=> dispatch(actions.userNameChanged(event.target.value)),
    emailChangeHandler: (event)=> dispatch(actions.userEmailChanged(event.target.value)),
    passwordChangeHandler: (event) => dispatch(actions.userPasswordChanged(event.target.value)),
    passwordConfirmChangeHandler: (event) => dispatch(actions.userPasswordConfirmChanged(event.target.value)),
    getUserRequestSuccess: (user) => dispatch(actions.getUserRequestSuccess(user)),
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
