import axios from 'axios';
import { ADD_PROJECT, RESET_PROJECT, SET_PROJECTS } from '../mutation-types';
import { FETCH_PROJECTS, SAVE_PROJECT } from '../action-types';

const apiEndpoint = '/api/projects/';

function initialProjectState() {
  return {
    name: "",
    shortcut: "",
    users_id: [],
    tasks: [],
    activeBoard: [],
    draftBoards: [],
    backlog: [],
    active: true
  };
}

export default {
  state: {
    all: [],
    newProject: initialProjectState()
  },
  mutations: {
    [ADD_PROJECT](state, project) {
      state.all = [...state.all, project];
    },
    [RESET_PROJECT](state) {
      state.newProject = initialProjectState();
    },
    [SET_PROJECTS](state, projects) {
      state.all = projects;
    }
  },
  actions: {
    [FETCH_PROJECTS](context) {
      return axios
        .get(apiEndpoint)
        .then(({data}) => {
          context.commit(SET_PROJECTS, data);
        });
    },
    [SAVE_PROJECT]({commit}, project) {
      return axios
        .post(apiEndpoint, project)
        .then(() => {
          commit(ADD_PROJECT, project);
          commit(RESET_PROJECT);
        });
    }
  }
}
