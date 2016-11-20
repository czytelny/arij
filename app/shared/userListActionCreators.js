const {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS,
  GET_ALL_USER_REQUEST_FAILURE
} = require("./userListActionTypes");

function getAllUserRequest() {
  return {
    type: GET_ALL_USER_REQUEST,
    meta: {remote: true},
  }
}

function getAllUserRequestSuccess(users) {
  return {
    type: GET_ALL_USER_REQUEST_SUCCESS,
    users
  }
}

function getAllUserRequestFailure(message) {
  return {
    type: GET_ALL_USER_REQUEST_FAILURE,
    message
  }
}

module.exports = {
  getAllUserRequest,
  getAllUserRequestSuccess,
  getAllUserRequestFailure
};
