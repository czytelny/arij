'use strict'

const mongoose = require('mongoose')
const modelDecoratorService = require('./../services/modelDecoratorService')

const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: {type: String, required: true},
  shortcut: {type: String, required: true, unique: true},
  leader: {type: String, required: true},
  created_at: Date,
  updated_at: Date
})

projectSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp.call(this)
  next()
})

module.exports = mongoose.model('Project', projectSchema)
