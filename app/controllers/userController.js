import * as actions from '../shared/userActionTypes'
import * as userListActions from '../shared/userListActionTypes'
import userService from './../services/userService';

import userListAction from './../shared/userListActionCreators'
import userAction from './../shared/userActionCreators'

module.exports = function (io) {
  io.on('connection', function (socket) {
    socket.on("action", function (action) {
      console.log(`user socketio controller - ${socket.request.user.logged_in}`);
      switch (action.type) {
        case userListActions.GET_ALL_USER_REQUEST:
          return userService.find().then(
            (users) => io.emit('action', userListAction.getAllUserRequestSuccess(users)),
            (err) => io.emit('action', userListAction.getAllUserRequestFailure("Getting users failed"))
          );
        case actions.GET_USER_REQUEST:
          return userService.findById(action.userId).then(
            (data) => io.emit('action', userAction.getUserRequestSuccess(data)),
            (err) => io.emit('action', userAction.getUserRequestFailure(err))
          );
        case actions.ADD_USER_REQUEST:
          return userService.save(action.user).then(
            (data) => io.emit('action', userAction.addUserRequestSuccess("User added successfully")),
            (err) => io.emit('action', userAction.addUserRequestFailure("Adding user failed"))
          );
        case actions.MODIFY_USER_REQUEST:
          return userService.update(action.user).then(
            (data) => io.emit('action', userAction.modifyUserRequestSuccess("User modified successfully")),
            (err) => io.emit('action', userAction.modifyUserRequestFailure("Modifying user failed"))
          )
      }
    });
  });
};

