import User from '../models/userModel';

function save(objectToSave) {
  return new User(objectToSave).save();
}

function findById(userId){
  return User.findById(userId);
}


module.exports = {
  save,
  findById
};
