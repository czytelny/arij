"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modelDecoratorService = require('./../services/modelDecoratorService');

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp(this);
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;