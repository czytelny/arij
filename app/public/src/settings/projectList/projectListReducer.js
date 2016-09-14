import {Map, List} from 'immutable';

import {
  GET_ALL_PROJECT_REQUEST_SUCCESS
} from '../../../../shared/projectActionTypes'

const initialState = Map({
  isLoading: false,
  projects: List()
});

const projectListReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECT_REQUEST_SUCCESS:
      return state.set('projects', List(action.projects));
  }

  return state;
};

export default projectListReducer;
