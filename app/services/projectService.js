const Project = require('../models/projectModel')
const logger = require('winston')

function save (objectToSave) {
  logger.debug(`project: saving: ${JSON.stringify(objectToSave)}`)
  return new Project(objectToSave).save()
}

function findById (projectId) {
  logger.debug(`project: findById: ${projectId}`)
  return Project.findById(projectId)
}

function find () {
  logger.debug('project: find all')
  return Project.find()
}

function update (projectId, project) {
  logger.debug(`modifying project with id: ${projectId}`)
  return Project.findById(projectId)
    .then((foundProject) => {
      if (foundProject) {
        Object.assign(foundProject, project)
        return foundProject.save()
      }
    })
}

module.exports = {
  save,
  findById,
  find,
  update
}
