"use strict";

import mongoose from 'mongoose';
import modelDecoratorService from './../services/modelDecoratorService';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {type: String, required: true},
  shortcut: {type: String, required: true, unique: true},
  leader: {type: String, required: false},
  created_at: Date,
  updated_at: Date
});

projectSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp.call(this);
  next();
});

export default mongoose.model('Project', projectSchema);
