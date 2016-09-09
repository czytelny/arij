import {
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'

const initialState = {
  users: []
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_REQUEST_SUCCESS:
      return Object.assign({}, state, {users: action.users});
  }

  return state;
};

export default userReducer;
