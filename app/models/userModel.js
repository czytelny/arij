"use strict";

import mongoose from 'mongoose';
import modelDecoratorService from './../services/modelDecoratorService';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp.call(this);
  next();
});

module.exports = mongoose.model('User', userSchema);
