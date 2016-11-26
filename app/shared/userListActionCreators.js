const {
  GET_ALL_USER_REQUEST_SUCCESS,
  GET_ALL_USER_REQUEST_FAILURE
} = require("./userListActionTypes");

function getAllUserRequest() {
  return function (dispatch) {
    return fetch("/api/users")
      .then(resp => resp.json())
      .then(data => dispatch(getAllUserRequestSuccess(data)))
      .catch(err => dispatch(getAllUserRequestSuccess(data)));
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
