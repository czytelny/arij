import axios from 'axios';
import {RECEIVE_PROJECTS} from '../mutation-types';


export default {
  state: {
    all: []
  },
  mutations: {
    [RECEIVE_PROJECTS](state, projects) {
      state.all = projects;
    }
  },
  actions: {
    getUserProjects(context) {
      return axios
        .get('/api/projects/')
        .then(({data}) => {
          context.commit(RECEIVE_PROJECTS, data);
        });
    }
  }
}
