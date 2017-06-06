import axios from 'axios';
import randomColor from 'random-material-color'
import {
  SET_NEW_USER, SET_NEW_USER_AVATAR,
  SHUFFLE_NEW_USER_AVATAR_COLOR,
  RESET_NEW_USER, SET_LOGGED_USER, SET_USERS, SET_USER
} from '../mutation-types';
import {
  FETCH_LOGGED_USER, FETCH_USERS,
  FETCH_USER, SAVE_USER
} from './../action-types'

function initialUserState() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    projects: [],
    roles: [],
    avatar: {
      color: randomColor.getColor(),
    }
  }
}

function initialLoggedUser() {
  return {
    name: 'Anonymous',
    email: 'Anonymous',
    roles: []
  }
}

export default {
  state: {
    all: [],
    details: {},
    newUser: initialUserState(),
    logged: initialLoggedUser()
  },
  mutations: {
    [SET_LOGGED_USER](state, user) {
      state.logged = user;
    },
    [SET_USERS](state, users) {
      state.all = users;
    },
    [SET_USER](state, user) {
      state.details = user;
    },
    [SET_NEW_USER](state, value) {
      Object.assign(state.newUser, value);
    },
    [SET_NEW_USER_AVATAR](state, value) {
      Object.assign(state.newUser.avatar, value);
    },
    [SHUFFLE_NEW_USER_AVATAR_COLOR](state) {
      state.newUser.avatar.color = randomColor.getColor();
    },
    [RESET_NEW_USER](state) {
      state.newUser = initialUserState();
    },
  },
  actions: {
    [FETCH_LOGGED_USER]({commit}) {
      return axios
        .get('/api/activeUser/')
        .then(({data}) => {
          commit(SET_LOGGED_USER, data);
        })
    },
    [FETCH_USERS]({commit}) {
      return axios
        .get('/api/users/')
        .then(({data}) => {
          commit(SET_USERS, data);
        })
    },
    [FETCH_USER]({commit}, userId) {
      return axios
        .get(`/api/user/${userId}`)
        .then(({data}) => {
          commit(SET_USER, data);
        })
    },
    [SAVE_USER]({commit}, userToSave) {
      return axios
        .post('/api/users/', userToSave)
        .then(() => {
          commit(RESET_NEW_USER);
        })
    },

  }
}
