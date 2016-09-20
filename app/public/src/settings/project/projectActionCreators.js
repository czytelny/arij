import {
  PROJECT_NAME_CHANGED,
  PROJECT_SHORTCUT_CHANGED,
  PROJECT_LEADER_CHANGED,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_REQUEST_FAILURE
} from '../../../../shared/projectActionTypes'

function projectNameChanged(name) {
  return {
    type: PROJECT_NAME_CHANGED,
    name: name
  }
}

function projectShortcutChanged(shortcut) {
  return {
    type: PROJECT_SHORTCUT_CHANGED,
    shortcut: shortcut
  }
}

function projectLeaderChanged(leader) {
  return {
    type: PROJECT_LEADER_CHANGED,
    leader: leader
  }
}

function addProjectRequest(project){
  return {
    type: ADD_PROJECT_REQUEST,
    project: project
  }
}

export default {
  projectNameChanged,
  projectShortcutChanged,
  projectLeaderChanged,
  addProjectRequest
}
