"use strict";

module.exports = function (io) {
  const express = require('express');
  const router = express.Router();
  const User = require('../models/userModel');

  router.route('/')
    .get(function (req, res) {
      res.send('GET handler for /users route');
    })
    .post(function (req, res) {
      let dude = new User({
        "name": "Dude",
        "email": "dude@gmail.com",
        "password": "lebowsky"
      });

      router.route('/')
        .get(function (req, res) {
          res.send('GET handler for /users route');
        })
        .post(function (req, res) {
          let dude = new User({
            "name": "Dude",
            "email": "dude@gmail.com",
            "password": "lebowsky"
          });

          dude.save(function (err) {
            if (err) res.status(500).send('500');
            res.json({message: 'Dude created!'});
          });
        });
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
