import messageActions from '../public/src/app/messages/messagesActionCreators'
import socketHandler from '../public/src/socketHandler';

import * as action from './userActionTypes'


function userNameChanged(name) {
  return {
    type: action.USER_NAME_CHANGED,
    name: name
  }
}

function userPasswordChanged(password) {
  return {
    type: action.USER_PASSWORD_CHANGED,
    password: password
  }
}

function userPasswordConfirmChanged(password) {
  return {
    type: action.USER_PASSWORD_CONFIRM_CHANGED,
    password: password
  }
}

function userEmailChanged(email) {
  return {
    type: action.USER_EMAIL_CHANGED,
    email: email
  }
}

function validateUser() {
  return {
    type: action.VALIDATE_USER
  }
}

function validateUserEdit() {
  return {
    type: action.VALIDATE_USER_EDIT
  }
}

function savingInProgress() {
  return {
    type: action.SAVING_USER_IN_PROGRESS
  }
}

function savingFinished() {
  return {
    type: action.SAVING_USER_FINISHED
  }
}

function getUserRequest(userId) {
  return {
    type: action.GET_USER_REQUEST,
    meta: {remote: true},
    userId
  }
}

function getUserRequestSuccess(user) {
  return {
    type: action.GET_USER_REQUEST_SUCCESS,
    user: user
  }
}

function getUserRequestFailure(err) {
  return {
    type: action.GET_USER_REQUEST_FAILURE,
    err
  }
}

function initializeNewUser() {
  return {
    type: action.INITIALIZE_NEW_USER
  }
}

function submitUser() {
  return (dispatch, getState) => {
    const {userState} = getState();
    const user = userState.get("user");
    if (userState.getIn(["errors", "isValid"])) {
      dispatch(savingInProgress());
      socketHandler.emit(action.ADD_USER_REQUEST, user);
    } else {
      dispatch(messageActions.showErrorMessage("Sorry, user form is invalid"));
    }
  }
}
function submitUserEdit() {
  return (dispatch, getState) => {
    const {userState} = getState();
    const user = userState.get("user");
    if (userState.getIn(["errors", "isValid"])) {
      dispatch(savingInProgress());
      socketHandler.emit(action.MODIFY_USER_REQUEST, user);
    } else {
      dispatch(messageActions.showErrorMessage("Sorry, user form is invalid"));
    }
  }
}

export default {
  userNameChanged,
  userPasswordChanged,
  userEmailChanged,
  userPasswordConfirmChanged,
  validateUser,
  savingInProgress,
  savingFinished,
  initializeNewUser,
  validateUserEdit,
  submitUser,
  submitUserEdit,

  getUserRequest,
  getUserRequestSuccess,
  getUserRequestFailure
}
