import * as actionTypes from '../shared/userActionTypes'

const initialState = {
  selectedEntry: null,
  entries: new Map()
};

function reduceAddUserReqSuccess(state, body) {
  let nextState = Object.assign({}, state);
  nextState.entries.set(body["_id"], body);
  return nextState;
}

function reduceGetUserReqSuccess(state, body) {
  let nextState = Object.assign({}, state);
  nextState.selectedEntry = body._id;
  return nextState;
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST_SUCCESS:
      return reduceAddUserReqSuccess(state, action.body);
    case actionTypes.GET_USER_REQUEST_SUCCESS:
      return reduceGetUserReqSuccess(state, action.body);
  }
  return state;
}
