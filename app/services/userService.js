const User = require('../models/userModel');
const logger = require('winston');

function save(objectToSave) {
  logger.info(`user: saving: ${JSON.stringify(objectToSave)}`);
  return new User(objectToSave).save();
}

function findById(userId) {
  logger.info(`user: findById: ${userId}`);
  return User.findById(userId);
}

function findByEmail(email) {
  logger.info(`user: findByEmail: ${email}`);
  return User.findOne({email});
}

function find() {
  logger.info("user: find all");
  return User.find()
}

function update(userId, user) {
  logger.info(`modifying user with id: ${userId}`);

  return User.findById(userId)
    .then((foundUser) => {
      if (foundUser) {
        Object.assign(foundUser, user);
        return foundUser.save();
      }
    });
}


module.exports = {
  save,
  find,
  findById,
  findByEmail,
  update
};
