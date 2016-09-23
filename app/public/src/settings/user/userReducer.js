import {Map, fromJS} from 'immutable'

import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  VALIDATE_USER
} from '../../../../shared/userActionTypes'
import {isRequiredError, isEmailFormatError, isFormValid} from './../../app/validators'

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
  passwordConfirm: null
});

const updateFormValidity = function (state) {
  const nameValidated = validatedName(state);
  const emailValidated = validatedEmail(nameValidated);
  const passwordValidated = validatedPassword(emailValidated);

  return passwordValidated.updateIn(["errors", "isValid"],
    () => isFormValid(passwordValidated.get("errors")));
};

const validatedName = function (state) {
  return state.updateIn(['errors', 'name', 'required'],
    ()=> isRequiredError(state.getIn(['user', 'name'])));
};

const validatedEmail = function (state) {
  let resultState;
  resultState = state.updateIn(['errors', 'email', 'required'],
    ()=> isRequiredError(state.getIn(['user', 'email'])));

  resultState = resultState.updateIn(['errors', 'email', 'format'],
    ()=> isEmailFormatError(state.getIn(['user', 'email'])));
  return resultState;
};

const validatedPassword = function (state) {
  let resultState = state.updateIn(['errors', 'password', 'required'],
    ()=> isRequiredError(state.getIn(['user', 'password'])));
  resultState = resultState.updateIn(['errors', 'password', 'confirmed'],
    ()=> (resultState.getIn(['user', 'password']) !== resultState.get('passwordConfirm')));
  return resultState;
};


const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return validatedName(state
        .updateIn(['user', 'name'], ()=>action.name));
    case USER_EMAIL_CHANGED:
      return validatedEmail(state
        .updateIn(['user', 'email'], ()=>action.email));
    case USER_PASSWORD_CHANGED:
      return validatedPassword(state
        .updateIn(['user', 'password'], ()=>action.password));
    case USER_PASSWORD_CONFIRM_CHANGED:
      return validatedPassword(state
        .set('passwordConfirm', action.password));
    case VALIDATE_USER:
      return updateFormValidity(state)
  }

  return state;
};

export default userReducer;
