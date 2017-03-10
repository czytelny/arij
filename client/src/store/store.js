import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
    addLoggedUser(state, user) {
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
          context.commit('addLoggedUser', data);
        })
    }
  }
})
