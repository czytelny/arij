import messageActions from '../public/src/app/messages/messagesActionCreators'
import socketHandler from '../public/src/app/socketHandler';

import {
  ADD_USER_REQUEST,
  MODIFY_USER_REQUEST,
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  VALIDATE_USER,
  SAVING_USER_IN_PROGRESS,
  SAVING_USER_FINISHED,
  GET_USER_REQUEST_SUCCESS,
  INITIALIZE_NEW_USER ,
  VALIDATE_USER_EDIT
} from './userActionTypes'


function userNameChanged(name) {
  return {
    type: USER_NAME_CHANGED,
    name: name
  }
}

function userPasswordChanged(password) {
  return {
    type: USER_PASSWORD_CHANGED,
    password: password
  }
}

function userPasswordConfirmChanged(password) {
  return {
    type: USER_PASSWORD_CONFIRM_CHANGED,
    password: password
  }
}

function userEmailChanged(email) {
  return {
    type: USER_EMAIL_CHANGED,
    email: email
  }
}

function validateUser() {
  return {
    type: VALIDATE_USER
  }
}

function validateUserEdit() {
  return {
    type: VALIDATE_USER_EDIT
  }
}

function savingInProgress() {
  return {
    type: SAVING_USER_IN_PROGRESS
  }
}

function savingFinished() {
  return {
    type: SAVING_USER_FINISHED
  }
}

function getUserRequestSuccess(user) {
  return {
    type: GET_USER_REQUEST_SUCCESS,
    user: user
  }
}

function initializeNewUser() {
  return {
    type: INITIALIZE_NEW_USER
  }
}

function submitUser(){
  return (dispatch, getState) => {
    const {userState} = getState();
    const user = userState.get("user");
    if (userState.getIn(["errors", "isValid"])){
      dispatch(savingInProgress());
      socketHandler.emit(ADD_USER_REQUEST, user);
    } else {
      dispatch(messageActions.showErrorMessage("Sorry, user form is invalid"));
    }
  }
}
function submitUserEdit(){
  return (dispatch, getState) => {
    const {userState} = getState();
    const user = userState.get("user");
    if (userState.getIn(["errors", "isValid"])){
      dispatch(savingInProgress());
      socketHandler.emit(MODIFY_USER_REQUEST, user);
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
  getUserRequestSuccess,
  initializeNewUser,
  validateUserEdit,
  submitUser,
  submitUserEdit
}
