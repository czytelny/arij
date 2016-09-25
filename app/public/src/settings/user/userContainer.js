import React from 'react';
import User from './user';
import UserEdit from './userEdit';
import {connect} from 'react-redux';
import socketHandler from '../../app/socketHandler';
import actions from './userActionCreators'
import messageActions from './../../app/messages/messagesActionCreators'
import store from '../../store'
import {browserHistory} from 'react-router'
import _ from 'underscore'

import {
  ADD_USER_REQUEST,
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'


const UserContainer = React.createClass({
  _fetchUser() {
    socketHandler.emit(GET_USER_REQUEST, this.props.userId);
  },
  _initializeNewUser() {
    store.dispatch(actions.initializeNewUser());
  },
  componentDidMount() {
    socketHandler.on(ADD_USER_REQUEST_SUCCESS, () => {
      store.dispatch(actions.savingFinished());
      store.dispatch(messageActions.showSuccessMessage("User added successfully!"));
      browserHistory.goBack();
    });
    socketHandler.on(ADD_USER_REQUEST_FAILURE, (response) => {
      store.dispatch(actions.savingFinished());
      store.dispatch(messageActions.showErrorMessage(`Sorry, adding user failed: ${response.errmsg}`));
    });
    socketHandler.on(GET_USER_REQUEST_SUCCESS, (user) => {
      store.dispatch(actions.getUserRequestSuccess(user));
    });
    if (this.props.userId) {
      this._fetchUser();
    } else {
      this._initializeNewUser();
    }
  },

  componentWillUnmount(){
    socketHandler.removeAllListeners(ADD_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(ADD_USER_REQUEST_FAILURE)
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
                  submitHandler={this.props.submitHandler}
                  errors={this.props.errors}
                  savingInProgress={this.props.savingInProgress}
                  user={this.props.user}
        />)
    }
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    nameChangeHandler: (event)=> dispatch(actions.userNameChanged(event.target.value)),
    emailChangeHandler: (event)=> dispatch(actions.userEmailChanged(event.target.value)),
    passwordChangeHandler: (event) => dispatch(actions.userPasswordChanged(event.target.value)),
    passwordConfirmChangeHandler: (event) => dispatch(actions.userPasswordConfirmChanged(event.target.value)),
    submitHandler: (event) => {
      event.preventDefault();
      dispatch(actions.validateUser());
      if (store.getState().userState.getIn(["errors", "isValid"])) {
        dispatch(actions.savingInProgress());
        socketHandler.emit(ADD_USER_REQUEST, store.getState().userState.get("user"));
      } else {
        store.dispatch(messageActions.showErrorMessage("Sorry, user form is invalid"));
      }
    }
  }
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
