import * as actions from './../actions/userActionTypes'
import userService from './../services/userService';

module.exports = function (io) {
  "use strict";

  const express = require('express');
  const router = express.Router();

  router.route('/')
    .get(function (req, res) {
      res.send('GET handler for /users route');
    });

  // --------- websockets
  io.on('connection', function (socket) {
    socket.on(actions.GET_ALL_USER_REQUEST, function () {
      userService.find().then(
        (data) => io.emit(actions.GET_ALL_USER_REQUEST_SUCCESS, data),
        (err) => io.emit(actions.GET_ALL_USER_REQUEST_FAILURE, err)
      )
    });
  });

  return router;
};
