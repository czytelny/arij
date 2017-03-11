import axios from 'axios';
import { SET_LOGGED_USER } from '../mutation-types';
import { FETCH_LOGGED_USER } from './../action-types'

export default {
  state: {
    all: [],
    details: {},
    logged: {
      name: 'Anonymous',
      email: 'Anonymous',
      roles: []
    }
  },
  mutations: {
    [SET_LOGGED_USER](state, user) {
      state.logged = user;
    }
  },
  actions: {
    [FETCH_LOGGED_USER](context) {
      axios
        .get('/api/activeUser/')
        .then(({data}) => {
          context.commit(SET_LOGGED_USER, data);
        })
    }
  }
}
