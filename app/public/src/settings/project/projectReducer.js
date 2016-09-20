import {Map} from 'immutable'

import {
  PROJECT_NAME_CHANGED,
  ADD_PROJECT_REQUEST_FAILURE
} from '../../../../shared/projectActionTypes'


const initialState = Map({
  project: Map({
    _id: null,
    name: null,
    shortcut: null,
    leader: null,
    created_at: null,
    updated_at: null,
  }),
  isValid: false
});


const projectReducer = function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME_CHANGED:
      return state.updateIn(['project', 'name'], ()=>action.name);
  }

  return state;
};

export default projectReducer;
