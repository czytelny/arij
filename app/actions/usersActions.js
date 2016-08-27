import * as types from './userActionTypes'
import userService from './../services/userService';

function addUserRequest(user) {
  return {
    type: types.ADD_USER_REQUEST,
    user
  }
}

function addUserRequestSuccess(body) {
  return {
    type: types.ADD_USER_REQUEST_SUCCESS,
    receivedAt: Date.now(),
    body
  }
}

function addUserRequestFailure(code, msg) {
  return {
    type: types.ADD_USER_REQUEST_FAILURE,
    code,
    msg
  }
}

function getUserRequest(userId) {
  return function (dispatch) {
    return userService.findById(userId)
      .then((response) => {
        dispatch(getUserRequestSuccess(response))
      }, (err) => {
        dispatch(addUserRequestFailure(err))
      })
  };
}

function getUserRequestSuccess(body) {
  return {
    type: types.GET_USER_REQUEST_SUCCESS,
    body
  }
}

function getUserRequestFailure(err) {
  return {
    type: types.GET_USER_REQUEST_FAILURE,
    err
  }
}

export default {
  addUserRequest,
  addUserRequestSuccess,
  addUserRequestFailure,
  getUserRequest,
  getUserRequestSuccess,
  getUserRequestFailure
}



