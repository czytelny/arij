import {Map} from 'immutable'

import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED
} from '../../../../shared/userActionTypes'


const initialState = Map({
  user: Map({
    _id: null,
    name: null,
    email: null,
    password: null,
    created_at: null,
    updated_at: null,
  }),
  passwordConfirm: null,
  isValid: false
});


const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return state.updateIn(['user', 'name'], ()=>action.name);
    case USER_EMAIL_CHANGED:
      return state.updateIn(['user', 'email'], ()=>action.email);
    case USER_PASSWORD_CHANGED:
      let modifiedState = state.updateIn(['user', 'password'], ()=>action.password);
      if (action.password === state.get("passwordConfirm")) {
        return modifiedState.set("isValid", true);
      }
      return modifiedState.set("isValid", false);
    case USER_PASSWORD_CONFIRM_CHANGED:
      let newState = state.set('passwordConfirm', action.password);
      if (action.password === state.get("user").get("password")) {
        return newState.set("isValid", true);
      }
      return newState.set("isValid", false);
  }

  return state;
};

export default userReducer;
