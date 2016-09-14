import {
  GET_ALL_PROJECT_REQUEST_SUCCESS
} from '../../../../shared/projectActionTypes'


function getAllProjectRequestSuccess(projectsList) {
  return {
    type: GET_ALL_PROJECT_REQUEST_SUCCESS,
    projects: projectsList
  }
}

export default {
  getAllProjectRequestSuccess
}
