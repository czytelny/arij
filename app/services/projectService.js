const Project = require('../models/projectModel');

function save(objectToSave) {
  return new Project(objectToSave).save();
}

function findById(projectId) {
  return Project.findById(projectId);
}

function find() {
  return Project.find()
}


module.exports = {
  save,
  findById,
  find
};
