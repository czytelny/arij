import User from '../models/userModel';
import logger from 'winston'

function save(objectToSave) {
  logger.info(`user: saving: ${JSON.stringify(objectToSave)}`);
  return new User(objectToSave).save();
}

function findById(userId) {
  logger.info(`user: findById: ${userId}`);
  return User.findById(userId);
}

function find() {
  logger.info("user: find all");
  return User.find()
}

function update(user) {
  logger.info(`modifying user with id: ${user._id}`);

  return User.findById(user._id, function (err, foundUser) {
    if (err) logger.exception(err);

    foundUser.name = user.name;
    return foundUser.save();
  })
}


export default {
  save,
  findById,
  find,
  update
};
