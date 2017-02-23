const Project = require('../models/projectModel')
const logger = require('winston')
const {NO_SUCH_PROJECT} = require('./../commonErrors')

function save (objectToSave) {
  logger.debug(`project: saving: ${JSON.stringify(objectToSave)}`)
  return new Project(objectToSave).save()
}

function findById (projectId) {
  logger.debug(`project: findById: ${projectId}`)
  return Project.findById(projectId).exec()
}

function find () {
  logger.debug('project: find all')
  return Project.find({active: true}).exec()
}

function update (projectId, project) {
  logger.debug(`modifying project with id: ${projectId}`)
  return Project.findById(projectId).exec()
    .then((foundProject) => {
      if (!foundProject) {
        throw new Error(`Updating project failed: ${NO_SUCH_PROJECT}`);
      }
      Object.assign(foundProject, project)
      return foundProject.save()
    })
}

function deactivate (projectId) {
  logger.debug(`deactivating project with id ${projectId}`)

  return Project.findById(projectId).exec()
    .then((project) => {
      if(!project) { throw new Error(`Deactivating project failed: ${NO_SUCH_PROJECT}`)}
      project.active = false;
      return project.save();
    })

}

module.exports = {
  save,
  findById,
  find,
  update,
  deactivate
}
