module.exports = {
  // remote events
  ADD_USER_REQUEST: "add/user",
  ADD_USER_REQUEST_SUCCESS: "add/user/success",
  ADD_USER_REQUEST_FAILURE: "add/user/failure",
  GET_USER_REQUEST: "get/user",
  GET_USER_REQUEST_SUCCESS: "get/user/success",
  GET_USER_REQUEST_FAILURE: "get/user/failure",
  MODIFY_USER_REQUEST: "modify/user",
  MODIFY_USER_REQUEST_SUCCESS: "modify/user/success",
  MODIFY_USER_REQUEST_FAILURE: "modify/user/failure",

  // standard internal
  USER_NAME_CHANGED: "user_name_changed",
  USER_EMAIL_CHANGED: "user_email_changed",
  USER_PASSWORD_CHANGED: "user_password_changed",
  USER_PASSWORD_CONFIRM_CHANGED: "user_password_confirm_changed",
  INITIALIZE_NEW_USER: "initialize_new_user",
  VALIDATE_USER: "validate_user",
  VALIDATE_USER_EDIT: "validate_user_edit",

  GET_ALL_USER_REQUEST_SUCCESS: "GET_ALL_USER_REQUEST_SUCCESS",
  GET_ALL_USER_REQUEST_FAILURE: "GET_ALL_USER_REQUEST_FAILURE"
};
