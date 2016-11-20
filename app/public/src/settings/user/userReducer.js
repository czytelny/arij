const {Map, fromJS} = require('immutable');

const {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  VALIDATE_USER,

  ADD_USER_REQUEST,
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE,

  MODIFY_USER_REQUEST,
  MODIFY_USER_REQUEST_SUCCESS,
  MODIFY_USER_REQUEST_FAILURE,

  GET_USER_REQUEST_SUCCESS,
  INITIALIZE_NEW_USER,
  VALIDATE_USER_EDIT
} = require('../../../../shared/userActionTypes');
const {isRequiredError, isEmailFormatError, isFormValid} = require('./../../app/validators');

const initialState = Map({
  user: Map({
    _id: null,
    name: null,
    email: null,
    password: null,
    created_at: null,
    updated_at: null
  }),
  errors: fromJS({
    isValid: false,
    name: {
      required: false
    },
    email: {
      required: false,
      format: false
    },
    password: {
      required: false,
      confirmed: false
    }
  }),
  passwordConfirm: null,
  savingInProgress: false
});

const validateUser = function(state) {
  const nameValidated = validatedName(state);
  const emailValidated = validatedEmail(nameValidated);
  const passwordValidated = validatedPassword(emailValidated);

  return passwordValidated.updateIn(["errors", "isValid"],
    () => isFormValid(passwordValidated.get("errors")));
};

const validateUserEdit = function(state) {
  const nameValidated = validatedName(state);
  return nameValidated.updateIn(["errors", "isValid"],
    () => isFormValid(nameValidated.get("errors")));
};

const validatedName = function(state) {
  return state.updateIn(['errors', 'name', 'required'],
    () => isRequiredError(state.getIn(['user', 'name'])));
};

const validatedEmail = function(state) {
  let resultState;
  resultState = state.updateIn(['errors', 'email', 'required'],
    () => isRequiredError(state.getIn(['user', 'email'])));

  resultState = resultState.updateIn(['errors', 'email', 'format'],
    () => isEmailFormatError(state.getIn(['user', 'email'])));
  return resultState;
};

const validatedPassword = function(state) {
  let resultState = state.updateIn(['errors', 'password', 'required'],
    () => isRequiredError(state.getIn(['user', 'password'])));
  resultState = resultState.updateIn(['errors', 'password', 'confirmed'],
    () => (resultState.getIn(['user', 'password']) !== resultState.get('passwordConfirm')));
  return resultState;
};


const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return validatedName(state
        .updateIn(['user', 'name'], () => action.name));
    case USER_EMAIL_CHANGED:
      return validatedEmail(state
        .updateIn(['user', 'email'], () => action.email));
    case USER_PASSWORD_CHANGED:
      return validatedPassword(state
        .updateIn(['user', 'password'], () => action.password));
    case USER_PASSWORD_CONFIRM_CHANGED:
      return validatedPassword(state
        .set('passwordConfirm', action.password));
    case VALIDATE_USER:
      return validateUser(state);
    case VALIDATE_USER_EDIT:
      return validateUserEdit(state);
    case ADD_USER_REQUEST:
      return state.set("savingInProgress", true);
    case ADD_USER_REQUEST_SUCCESS:
      return state.set("savingInProgress", false);
    case ADD_USER_REQUEST_FAILURE:
      return state.set("savingInProgress", false);
    case MODIFY_USER_REQUEST:
      return state.set("savingInProgress", true);
    case MODIFY_USER_REQUEST_SUCCESS:
      return state.set("savingInProgress", false);
    case MODIFY_USER_REQUEST_FAILURE:
      return state.set("savingInProgress", false);
    case GET_USER_REQUEST_SUCCESS:
      return state.set("user", fromJS(action.user));
    case INITIALIZE_NEW_USER:
      return state.merge({
        user: initialState.get("user"),
        errors: initialState.get("errors")
      });
  }

  return state;
};

module.exports = userReducer;
