import {Map, List} from 'immutable';

import {
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'

const initialState = Map({
  isLoading: false,
  users: List()
});

const userListReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_REQUEST_SUCCESS:
      return state.set('users', List(action.users));
  }

  return state;
};

export default userListReducer;
