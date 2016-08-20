module.exports = function (io) {
  "use strict";

  const express = require('express');
  const router = express.Router();
  const userService = require('./../services/userService');
  const httpStatus = require('http-status-codes');
  const requests = require('../shared/requests');

  router.route('/')
    .get(function (req, res) {
      res.send('GET handler for /users route');
    });

  // --------- websockets
  io.on('connection', function (socket) {
    socket.on(requests.users.post, function (data) {
      console.log("saving user data "+ JSON.stringify(data));

      userService.save(data).then(
        () => io.emit(requests.users.post, httpStatus.OK),
        () => io.emit(requests.users.post, httpStatus.INTERNAL_SERVER_ERROR)
      );
    });
  });

  return router;
};
