import * as actions from '../shared/userActionTypes'
import userService from './../services/userService';

import userListAction from './../shared/userListActionCreators'

module.exports = function (io) {

  io.on('connection', function (socket) {
    socket.on("action", function (action) {
      if (action.type === actions.S_GET_ALL_USER_REQUEST) {
        userService.find().then(
          (users) => io.emit('action', userListAction.getAllUserRequestFailure("Getting users failed")),
          (err) => io.emit('action', userListAction.getAllUserRequestFailure())
        );
      }
    });

    socket.on(actions.GET_USER_REQUEST, function (userId) {
      userService.findById(userId).then(
        (data) => io.emit(actions.GET_USER_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.GET_USER_REQUEST_FAILURE, err)
      )
    });

    socket.on(actions.ADD_USER_REQUEST, function (user) {
      userService.save(user).then(
        (data) => io.emit(actions.ADD_USER_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.ADD_USER_REQUEST_FAILURE, err)
      )
    });

    socket.on(actions.MODIFY_USER_REQUEST, function (user) {
      userService.update(user).then(
        (data) => io.emit(actions.MODIFY_USER_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.MODIFY_USER_REQUEST_FAILURE, err)
      )
    })
  });
};
