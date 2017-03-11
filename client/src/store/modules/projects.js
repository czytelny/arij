import axios from 'axios';
import { SET_PROJECTS } from '../mutation-types';
import { FETCH_PROJECTS } from '../action-types';

export default {
  state: {
    all: []
  },
  mutations: {
    [SET_PROJECTS](state, projects) {
      state.all = projects;
    }
  },
  actions: {
    [FETCH_PROJECTS](context) {
      return axios
        .get('/api/projects/')
        .then(({data}) => {
          context.commit(SET_PROJECTS, data);
        });
    }
  }
}
