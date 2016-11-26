const {
  GET_ALL_USER_REQUEST_SUCCESS,
  GET_ALL_USER_REQUEST_FAILURE
} = require("./userListActionTypes");

function getAllUserRequest() {
  return function (dispatch) {
    return fetch("/api/users")
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        dispatch(getAllUserRequestFailure(resp.statusText))
      }, err => dispatch(getAllUserRequestFailure(err)))
      .then(data => dispatch(getAllUserRequestSuccess(data)))
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
