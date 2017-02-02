'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const modelDecoratorService = require('./../services/modelDecoratorService')
const {roles} = require('./../services/accessControl')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  active: {type: Boolean, default: true},
  roles: {type: Array, default: roles.user},
  created_at: Date,
  updated_at: Date
})

userSchema.pre('save', function (next) {
  modelDecoratorService.addTimestamp.call(this)
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
})

userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
