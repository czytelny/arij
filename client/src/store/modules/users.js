import axios from 'axios';
import { SET_LOGGED_USER, SET_USERS } from '../mutation-types';
import { FETCH_LOGGED_USER, FETCH_USERS } from './../action-types'

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
    },
    [SET_USERS](state, users) {
      state.all = users;
    }
  },
  actions: {
    [FETCH_LOGGED_USER](context) {
      axios
        .get('/api/activeUser/')
        .then(({data}) => {
          context.commit(SET_LOGGED_USER, data);
        })
    },
    [FETCH_USERS](context) {
      axios
        .get('/api/users/')
        .then(({data}) => {
          context.commit(SET_USERS, data);
        })
    }
  }
}
