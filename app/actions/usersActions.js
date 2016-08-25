import * as types from './userActionTypes'

/* function creators */
export function addUserRequest(user) {
  return {
    type: types.ADD_USER_REQUEST,
    user
  }
}

export function addUserRequestSuccess() {
  return {
    type: types.ADD_USER_REQUEST_SUCCESS
  }
}

export function addUserRequestFailure(code, msg) {
  return {
    type: types.ADD_USER_REQUEST_FAILURE,
    code,
    msg
  }
}

