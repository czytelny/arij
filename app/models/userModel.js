"use strict";

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });

});

export default mongoose.model('User', userSchema);
