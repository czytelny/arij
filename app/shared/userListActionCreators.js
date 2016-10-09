import {
  S_GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS,
  GET_ALL_USER_REQUEST_FAILURE
} from './userActionTypes'

function getAllUserRequest() {
  return {
    type: S_GET_ALL_USER_REQUEST
  }
}

function getAllUserRequestSuccess(usersList) {
  return {
    type: GET_ALL_USER_REQUEST_SUCCESS,
    users: usersList
  }
}

function getAllUserRequestFailure(message) {
  return {
    type: GET_ALL_USER_REQUEST_FAILURE,
    message
  }
}

export default {
  getAllUserRequest,
  getAllUserRequestSuccess,
  getAllUserRequestFailure
}
