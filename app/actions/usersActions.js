import * as types from './userActionTypes'

const userService = require('./../services/userService');

/* function creators */
export function addUserRequest(user) {
  return {
    type: types.ADD_USER_REQUEST,
    user
  }
}

export function addUserRequestSuccess(body) {
  return {
    type: types.ADD_USER_REQUEST_SUCCESS,
    receivedAt: Date.now(),
    body
  }
}

export function addUserRequestFailure(code, msg) {
  return {
    type: types.ADD_USER_REQUEST_FAILURE,
    code,
    msg
  }
}

export function getUserRequest(userId) {
  return function (dispatch) {
    return userService.findById(userId)
      .then((response) => {
        console.log('found body: ' + JSON.stringify(response));
        dispatch(getUserRequestSuccess(response))
      }, (err) => {
        console.log('an error occured ' + err);
        dispatch(addUserRequestFailure(err))
      })
  };
}

export function getUserRequestSuccess(body) {
  return {
    type: types.GET_USER_REQUEST_SUCCESS,
    body
  }
}

