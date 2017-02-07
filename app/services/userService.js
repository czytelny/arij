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
  logger.debug('user: find all active users')
  return User.find({active: true}, '-password')
}

function deactivate (userId) {
  logger.debug(`deactivating user with id: ${userId}`)

  return User.findById(userId)
    .then((user) => {
    //TODO do we need this check ?
      if (user) {
        user.active = false;
        return user.save();
      }
    })
}

function changeNickName (userId, changeNickNameObject) {
  logger.debug(`changing user nickName to ${JSON.stringify(changeNickNameObject)} UserId: ${userId}`)
  return User.findById(userId)
    .then((user) => {
      if (user) {
        //TODO perform validation of changeNickNameObject
        Object.assign(user, changeNickNameObject)
        return user.save();
      }
    })

}

module.exports = {
  save,
  find,
  findById,
  findByEmail,
  deactivate,
  changeNickName
}
