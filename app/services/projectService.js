const Project = require('../models/projectModel');
const logger = require('winston');

function save(objectToSave) {
  logger.info(`project: saving: ${JSON.stringify(objectToSave)}`);
  return new Project(objectToSave).save();
}

function findById(projectId) {
  logger.info(`project: findById: ${projectId}`);
  return Project.findById(projectId);
}

function find() {
  logger.info("project: find all");
  return Project.find()
}

function update(projectId, project) {
  logger.info(`modifying project with id: ${projectId}`);
  return Project.findById(projectId)
    .then((foundProject) => {
      if (foundProject) {
        Object.assign(foundProject, project);
        return foundProject.save();
      }
    });
}

module.exports = {
  save,
  findById,
  find,
  update
};
