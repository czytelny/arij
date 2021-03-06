const User = require('../models/userModel')
const {NO_SUCH_USER} = require('./../commonErrors')
const logger = require('winston')

function save(objectToSave) {
  logger.debug(`user: saving: ${JSON.stringify(objectToSave)}`)
  return new User(objectToSave).save()
}

function findById(userId) {
  logger.debug(`user: findById: ${userId}`)
  return User.findById(userId, '-password')
}

function findByEmail(email) {
  logger.debug(`user: findByEmail: ${email}`)
  return User.findOne({email})
}

function find() {
  logger.debug('user: find all active users')
  return User.find({}, '-password')
}

function deactivate(userId) {
  logger.debug(`deactivating user with id: ${userId}`)

  return User.findById(userId).exec()
    .then((user) => {
      if (!user) { throw new Error(`Deactivating user failed: ${NO_SUCH_USER}`); }
      user.active = false;
      return user.save();
    })
}

function alterLastLogin(userId) {
  logger.debug(`altering last login time for user id: ${userId}`)
  return User.findById(userId).exec()
    .then((foundUser) => {
      if (!foundUser) { throw new Error(`Logging user log time failed: ${NO_SUCH_USER}`); }
      foundUser.last_login = new Date();
      return foundUser.save()
    }).catch((err) => {
      logger.error(err);
    })
}

function modify(userId, user) {
  logger.debug(`modifying user with id: ${userId}`)

  return User.findById(userId).exec()
    .then((foundUser) => {
      if (!user) { throw new Error(`Deactivating user failed: ${NO_SUCH_USER}`); }
      Object.assign(foundUser, user)
      return foundUser.save()
    })
}

function modifyPartial(userId, user) {
  logger.debug(`modifying user with id: ${userId}`)
  let filteredUserFields = _.pick(user, 'nickName', 'password')

  return User.findById(userId).exec()
    .then((foundUser) => {
      if (!user) { throw new Error(`Deactivating user failed: ${NO_SUCH_USER}`); }
      Object.assign(foundUser, filteredUserFields)
      return foundUser.save()
    })
}

module.exports = {
  save,
  find,
  findById,
  findByEmail,
  deactivate,
  modify,
  modifyPartial,
  alterLastLogin
}
