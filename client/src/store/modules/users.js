import axios from 'axios';
import { ADD_LOGGED_USER } from '../mutation-types';

export default {
  state: {
    loggedUser: {
      name: 'Anonymous',
      email: 'Anonymous',
      roles: []
    }
  },
  mutations: {
    [ADD_LOGGED_USER](state, user) {
      state.loggedUser = user;
    }
  },
  actions: {
    getLoggedUser(context) {
      axios
        .get('/api/activeUser/')
        .then(({data}) => {
          context.commit(ADD_LOGGED_USER, data);
        })
    }
  }
}
