import {
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'

const initialState = [];

const userListReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_REQUEST_SUCCESS:
      return action.users;
  }

  return state;
};

export default userListReducer;
