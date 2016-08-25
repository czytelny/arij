import * as types from './userActionTypes'

/* function creators */
export function addUserRequest(user) {
  return {
    type: types.ADD_USER_REQUEST,
    user
  }
}

