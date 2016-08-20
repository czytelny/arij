"use strict";

const User = require('../models/userModel');


function save(objectToSave) {
  return new User(objectToSave).save();
}

module.exports = {
  save: save
};
