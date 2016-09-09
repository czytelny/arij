import {
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'


function getAllUserRequestSuccess(usersList) {
  return {
    type: GET_ALL_USER_REQUEST_SUCCESS,
    users: usersList
  }
}

export default {
  getAllUserRequestSuccess
}
