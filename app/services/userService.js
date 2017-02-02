const User = require('../models/userModel')
const logger = require('winston')

function save (objectToSave) {
  logger.debug(`user: saving: ${JSON.stringify(objectToSave)}`)
  return new User(objectToSave).save()
}

function findById (userId) {
  logger.debug(`user: findById: ${userId}`)
  return User.findById(userId)
}

function findByEmail (email) {
  logger.debug(`user: findByEmail: ${email}`)
  return User.findOne({email})
}

function find () {
  logger.debug('user: find all')
  return User.find()
}

function update (userId, user) {
  logger.debug(`modifying user with id: ${userId}`)

  return User.findById(userId)
    .then((foundUser) => {
      if (foundUser) {
        Object.assign(foundUser, user)
        return foundUser.save()
      }
    })
}

module.exports = {
  save,
  find,
  findById,
  findByEmail,
  update
}
