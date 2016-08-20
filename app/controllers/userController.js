module.exports = function (io) {
  "use strict";

  const express = require('express');
  const router = express.Router();
  const userService = require('./../services/userService');
  var HttpStatus = require('http-status-codes');

  router.route('/')
    .get(function (req, res) {
      res.send('GET handler for /users route');
    })
    .post(function (req, res) {
      userService.save(req.body)
        .then(
          () => res.status(HttpStatus.OK),
          () => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('error')
        );
    });

  // ---------websockets
  io.on('connection', function (socket) {
    console.log("web socket connection established");
    socket.emit('news', {hello: 'world'});

    socket.on('some event', function (data) {
      console.log(data);
    });
  });

  return router;
};
