import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {ADD_LOGGED_USER} from './mutation-types';
import projects from './modules/projects'

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    loggedUser: {
      name: 'Anonymous',
      email: 'Anonymous',
      roles: []
    }
  },
  mutations: {
    [ADD_LOGGED_USER](state, user) {
      console.log(`yeah, got that dude - applying to store ${JSON.stringify(user)}`);
      state.loggedUser = user;
    }
  },
  actions: {
    getLoggedUser(context) {
      console.log("getting logged user from backend trololo");
      axios
        .get('/api/activeUser/')
        .then(({data}) => {
          context.commit(ADD_LOGGED_USER, data);
        })
    }
  },
  modules: {
    projects
  }
})
