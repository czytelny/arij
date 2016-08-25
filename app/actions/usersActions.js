import * as types from './userActionTypes'

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
  return {
    type: types.GET_USER_REQUEST,
    userId
  };
}

export function getUserRequestSuccess(body) {
  return {
    type: types.GET_USER_REQUEST_SUCCESS,
    body
  }

}

