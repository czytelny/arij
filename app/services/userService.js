"use strict";

const User = require('../models/userModel');


function save() {
  let dude = new User({
    "name": "Dude",
    "email": "dude@gmail.com",
    "password": "lebowsky"
  });

  return dude.save();
}

module.exports = {
  save: save
};