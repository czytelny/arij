import axios from 'axios';
import { SET_ROLES } from '../mutation-types';
import { FETCH_ROLES } from '../action-types';

export default {
  state: {
    all: []
  },
  mutations: {
    [SET_ROLES](state, roles) {
      state.all = roles;
    }
  },
  actions: {
    [FETCH_ROLES](context) {
      return axios
        .get('/api/roles/')
        .then(({data}) => {
          context.commit(SET_ROLES, data);
        });
    }
  }
}
