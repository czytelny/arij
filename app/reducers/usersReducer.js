import * as actionTypes from './../actions/userActionTypes'
import {Map} from 'immutable';

const initialState = Map();

export default function usersReducer(state = initialState, action) {
  switch (action.type){
    case actionTypes.GET_USER_REQUEST:
      console.log("getting user request recognized");
      return state;
    case actionTypes.GET_USER_REQUEST_SUCCESS:
      console.log("action type GET_USER_REQUEST_SUCCESS recognized: " + action.body);
      return state;
    case actionTypes.GET_USER_REQUEST_FAILURE:
      console.log("action type GET_USER_REQUEST_FAILURE recognized: " + action.body);
      return state;
  }
  return state;
}
