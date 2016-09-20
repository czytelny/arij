import {
  PROJECT_NAME_CHANGED,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_REQUEST_FAILURE
} from '../../../../shared/projectActionTypes'

function projectNameChanged(name) {
  return {
    type: PROJECT_NAME_CHANGED,
    name: name
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
  addProjectRequest
}
