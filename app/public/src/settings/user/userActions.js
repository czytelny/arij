import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  ADD_USER_REQUEST,
  ADD_USER_REQUEST_FAILURE,
  HIDE_USER_ERROR_MESSAGE
} from '../../../../shared/userActionTypes'


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

function addUserRequest(user){
  return {
    type: ADD_USER_REQUEST,
    user: user
  }
}

function addUserRequestFailure(err) {
  return {
    type: ADD_USER_REQUEST_FAILURE,
    error: err
  }
}

function hideUserMessageError() {
  return {
    type: HIDE_USER_ERROR_MESSAGE
  }
}

export default {
  userNameChanged,
  userPasswordChanged,
  userEmailChanged,
  userPasswordConfirmChanged,
  addUserRequest,
  addUserRequestFailure,
  hideUserMessageError
}
