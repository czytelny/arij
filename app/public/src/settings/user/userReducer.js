import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED
} from '../../../../shared/userActionTypes'


const initialState = {
  _id: null,
  name: null,
  email: null,
  password: null,
  created_at: null,
  updated_at: null
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return Object.assign({}, state, {name: action.name});
    case USER_EMAIL_CHANGED:
      return Object.assign({}, state, {email: action.email});
    case USER_PASSWORD_CHANGED:
      return Object.assign({}, state, {password: action.password});
  }

  return state;
};

export default userReducer;
