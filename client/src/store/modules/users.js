import axios from 'axios';
import randomColor from 'random-material-color'
import {
  SET_LOGGED_USER, SET_USERS, SET_NEW_USER_EMAIL,
  SET_NEW_USER_NAME, SET_NEW_USER_PASSWORD, SET_NEW_USER_PASSWORDCONFIRM,
  SET_NEW_USER_PROJECTS, SET_NEW_USER_ROLES,
  RESET_NEW_USER, SET_NEW_USER_RANDOM_AVATAR_COLOR,
  SET_NEW_USER_AVATAR_INITIALS
} from '../mutation-types';
import {
  FETCH_LOGGED_USER, FETCH_USERS,
  SAVE_USER
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
      initials: '',
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
    [SET_NEW_USER_EMAIL](state, value) {
      state.newUser.email = value;
    },
    [SET_NEW_USER_NAME](state, value) {
      state.newUser.name = value;
    },
    [SET_NEW_USER_PASSWORD](state, value) {
      state.newUser.password = value;
    },
    [SET_NEW_USER_PASSWORDCONFIRM](state, value) {
      state.newUser.passwordConfirm = value;
    },
    [SET_NEW_USER_PROJECTS](state, value) {
      state.newUser.projects = value;
    },
    [SET_NEW_USER_ROLES](state, value) {
      state.newUser.roles = value;
    },
    [RESET_NEW_USER](state) {
      state.newUser = initialUserState();
    },
    [SET_NEW_USER_RANDOM_AVATAR_COLOR](state) {
      state.newUser.avatar.color = randomColor.getColor();
    },
    [SET_NEW_USER_AVATAR_INITIALS](state, value) {
      state.newUser.avatar.initials = value;
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
    [SAVE_USER]({commit}, userToSave) {
      return axios
        .post('/api/users/', userToSave)
        .then(() => {
          commit(RESET_NEW_USER);
        })
    },

  }
}
