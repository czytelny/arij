const User = require('../models/userModel')
const {NO_SUCH_USER} = require('./../commonErrors')
const logger = require('winston')

function save (objectToSave) {
  logger.debug(`user: saving: ${JSON.stringify(objectToSave)}`)
  return new User(objectToSave).save()
}

function findById (userId) {
  logger.debug(`user: findById: ${userId}`)
  return User.findById(userId, '-password')
}

function findByEmail (email) {
  logger.debug(`user: findByEmail: ${email}`)
  return User.findOne({email})
}

function find () {
  logger.debug('user: find all active users')
  return User.find({active: true}, '-password')
}

function deactivate (userId) {
  logger.debug(`deactivating user with id: ${userId}`)

  return User.findById(userId).exec()
    .then((user) => {
      if (!user) { throw new Error(`Deactivating user failed: ${NO_SUCH_USER}`); }
      user.active = false;
      return user.save();
    })
}

function changeNickName (userId, nickNameObj) {
  logger.debug(`changing user nickName to ${JSON.stringify(nickNameObj)} UserId: ${userId}`)
  return User.findById(userId).exec()
    .then((user) => {
      if (!user) { throw new Error(`Deactivating user failed: ${NO_SUCH_USER}`); }
      user.nickName = nickNameObj.nickName;
      return user.save();
    })
}

function changeUserRoles (userId, userRolesObj) {
  logger.debug(`changing user roles to ${JSON.stringify(userRolesObj)} UserId: ${userId}`)

  return User.findById(userId).exec()
    .then((user) => {
      if (!user) { throw new Error(`Changing user roles failed: ${NO_SUCH_USER}`); }
      user.roles = userRolesObj.roles;
      return user.save();
    })
    .then((user) => {
      return findById(user.id);
    })
}

module.exports = {
  save,
  find,
  findById,
  findByEmail,
  deactivate,
  changeNickName,
  changeUserRoles
}
