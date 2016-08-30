import * as actionTypes from './../actions/userActionTypes'
import {Map, List} from 'immutable';

const initialState = Map({
  entries: List()
});

function addUserRequestSuccess(state, body) {
  const entries = state.get('entries').push(Map(body));
  return state.merge({entries});
}

export default function usersReducer(state = initialState, action) {
  switch (action.type){
    case actionTypes.ADD_USER_REQUEST:
      return state;
    case actionTypes.ADD_USER_REQUEST_SUCCESS:
      return addUserRequestSuccess(state, action.body);
    case actionTypes.ADD_USER_REQUEST_FAILURE:
      return state;
    case actionTypes.GET_USER_REQUEST:
      return state;
    case actionTypes.GET_USER_REQUEST_SUCCESS:
      return state;
    case actionTypes.GET_USER_REQUEST_FAILURE:
      return state;
  }
  return state;
}
