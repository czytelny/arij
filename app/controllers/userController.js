module.exports = function (io) {
  "use strict";

  const express = require('express');
  const router = express.Router();
  const userService = require('./../services/userService');

  router.route('/')
    .get(function (req, res) {
      res.send('GET handler for /users route');
    })
    .post(function (req, res) {
      userService.save()
        .then(
          () => res.json({message: 'Dude created!'}),
          () => res.status(500).send('500')
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
