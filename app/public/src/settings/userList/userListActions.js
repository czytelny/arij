import {
  S_GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'


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

export default {
  getAllUserRequestSuccess,
  getAllUserRequest
}
