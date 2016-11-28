const messageActions = require('../../app/messages/messagesActionCreators');
const action = require('./usersActionTypes');


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
  return function (dispatch) {
    return fetch(`/api/users/${userId}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        dispatch(getUserRequestFailure(resp.statusText))
      }, err => dispatch(getUserRequestFailure(err)))
      .then(data => dispatch(getUserRequestSuccess(data)))
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

function addUserRequest(user) {
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

function modifyUserRequest(user) {
  return {
    type: action.MODIFY_USER_REQUEST,
    meta: {remote: true},
    user
  }
}

function modifyUserRequestSuccess(message) {
  return {
    type: action.MODIFY_USER_REQUEST_SUCCESS,
    message
  }
}

function modifyUserRequestFailure(message) {
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

function getAllUserRequest() {
  return function (dispatch) {
    return fetch("/api/users")
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        dispatch(getAllUserRequestFailure(resp.statusText))
      }, err => dispatch(getAllUserRequestFailure(err)))
      .then(data => dispatch(getAllUserRequestSuccess(data)))
  }
}

function getAllUserRequestSuccess(users) {
  return {
    type: action.GET_ALL_USER_REQUEST_SUCCESS,
    users
  }
}

function getAllUserRequestFailure(message) {
  return {
    type: action.GET_ALL_USER_REQUEST_FAILURE,
    message
  }
}

module.exports = {
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
  modifyUserRequestFailure,

  getAllUserRequest,
  getAllUserRequestSuccess,
  getAllUserRequestFailure
}
