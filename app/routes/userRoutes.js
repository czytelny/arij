const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', function (req, res) {
  res.send('GET handler for /users route');
});

router.post('/', function (req, res, next) {
  let dude = new User({
    name: "Dude",
    email: "dude@gmail.com",
    "password": "lebowsky"
  });

  dude.save(function (err) {
    if (err) throw err;
    console.log('Woah, just created Dude !');
  });
  next();
});

module.exports = router;