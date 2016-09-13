import * as actions from '../shared/projectActionTypes'
import projectService from './../services/projectService';

module.exports = function (io) {

  io.on('connection', function (socket) {
    socket.on(actions.GET_ALL_PROJECT_REQUEST, function () {
      projectService.find().then(
        (data) => io.emit(actions.GET_ALL_PROJECT_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.GET_ALL_PROJECT_REQUEST_FAILURE, err)
      )
    });

    socket.on(actions.ADD_PROJECT_REQUEST, function (project) {
      projectService.save(project).then(
        (data) => io.emit(actions.ADD_PROJECT_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.ADD_PROJECT_REQUEST_FAILURE, err)
      )
    })
  });
};
