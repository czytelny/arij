import {Map} from 'immutable'

import {
  PROJECT_NAME_CHANGED,
  PROJECT_SHORTCUT_CHANGED,
  PROJECT_LEADER_CHANGED,
  ADD_PROJECT_REQUEST_FAILURE
} from '../../../../shared/projectActionTypes'


const initialState = Map({
  project: Map({
    _id: null,
    name: null,
    shortcut: null,
    leader: null,
    created_at: null,
    updated_at: null
  })
});


const projectReducer = function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME_CHANGED:
      return state.updateIn(['project', 'name'], ()=>action.name);
    case PROJECT_SHORTCUT_CHANGED:
      return state.updateIn(['project', 'shortcut'], ()=>action.shortcut);
    case PROJECT_LEADER_CHANGED:
          return state.updateIn(['project', 'leader'], ()=>action.leader);
  }

  return state;
};

export default projectReducer;
