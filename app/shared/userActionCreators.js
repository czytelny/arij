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

function addUserRequest(user){
  return {
    type: action.ADD_USER_REQUEST,
    meta: {remote: true},
    user
  }
}

function addUserRequestSuccess(message) {
  return {
    type: action.ADD_USER_REQUEST_SUCCESS,
    message
  }
}

function addUserRequestFailure(message) {
  return {
    type: action.ADD_USER_REQUEST_FAILURE,
    message
  }
}

function modifyUserRequest(user){
  return {
    type: action.MODIFY_USER_REQUEST,
    meta: {remote: true},
    user
  }
}

function modifyUserRequestSuccess(message){
  return {
    type: action.MODIFY_USER_REQUEST_SUCCESS,
    message
  }
}

function modifyUserRequestFailure(message){
  return {
    type: action.MODIFY_USER_REQUEST_FAILURE,
    message
  }
}

function submitUser() {
  return (dispatch, getState) => {
    const {userState} = getState();
    const user = userState.get("user");
    if (userState.getIn(["errors", "isValid"])) {
      dispatch(addUserRequest(user));
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
      dispatch(modifyUserRequest(user))
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
  initializeNewUser,
  validateUserEdit,
  submitUser,
  submitUserEdit,

  addUserRequest,
  addUserRequestSuccess,
  addUserRequestFailure,

  getUserRequest,
  getUserRequestSuccess,
  getUserRequestFailure,

  modifyUserRequest,
  modifyUserRequestSuccess,
  modifyUserRequestFailure
}
