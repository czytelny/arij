import User from '../models/userModel';

function save(objectToSave) {
  return new User(objectToSave).save();
}

function findById(userId){
  return User.findById(userId);
}

function find(){
  return User.find()
}


export default {
  save,
  findById,
  find
};
