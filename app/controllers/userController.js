import * as actions from '../shared/userActionTypes'
import * as userListActions from '../shared/userListActionTypes'
import userService from './../services/userService';

import userListAction from './../shared/userListActionCreators'
import userAction from './../shared/userActionCreators'

module.exports = function (io) {
  io.on('connection', function (socket) {
    socket.on("action", function (action) {
      switch (action.type) {
        case userListActions.GET_ALL_USER_REQUEST:
          return userService.find().then(
            (users) => io.emit('action', userListAction.getAllUserRequestSuccess(users)),
            (err) => io.emit('action', userListAction.getAllUserRequestFailure("Getting users failed"))
          );
        case actions.GET_USER_REQUEST:
          userService.findById(action.userId).then(
            (data) => io.emit('action', userAction.getUserRequestSuccess(data)),
            (err) => io.emit('action', userAction.getUserRequestFailure(err))
          )
      }
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
