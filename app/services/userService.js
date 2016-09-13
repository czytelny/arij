import User from '../models/userModel';
import logger from 'winston'

function save(objectToSave) {
  logger.info(`user: saving: ${JSON.stringify(objectToSave)}`);
  return new User(objectToSave).save();
}

function findById(userId){
  logger.info(`user: findById: ${userId}`);
  return User.findById(userId);
}

function find(){
  logger.info("user: find all");
  return User.find()
}


export default {
  save,
  findById,
  find
};
