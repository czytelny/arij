import Vue from 'vue';
import Vuex from 'vuex';

import projects from './modules/projects'
import users from './modules/users'
import roles from './modules/roles'

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
    users,
    projects,
    roles
  }
})
