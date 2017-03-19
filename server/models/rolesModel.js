'use strict'

const mongoose = require('mongoose')
const modelDecoratorService = require('./../services/modelDecoratorService')
const Schema = mongoose.Schema

const rolesSchema = new Schema({
  name: {type: String, required: true, maxlength: 30, minLength: 2},
  created_at: Date,
  updated_at: Date
})

rolesSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp.call(this)
  next()
})

module.exports = mongoose.model('Roles', rolesSchema)
