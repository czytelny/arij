const router = require('express').Router()
const projectService = require('./../services/projectService')
const {checkPermissions, roles} = require('./../services/accessControl')
const {handleError} = require('./errorHandler')

const accessRoles = [roles.admin]

router.get('/', checkPermissions(accessRoles), findAll)
router.post('/', checkPermissions(accessRoles), save)

router.get('/:projectId', checkPermissions(accessRoles), findById)
router.put('/:projectId', checkPermissions(accessRoles), modifyProject)
router.delete('/:projectId', checkPermissions(accessRoles), deactivateProject)

function findAll (req, res) {
  projectService
    .find()
    .then((projects) => res.json(projects))
    .catch((err) => handleError(res, err, "Getting projects failed"))
}

function save (req, res) {
  projectService
    .save(req.body)
    .then((data) => res.send('Project added successfully'))
    .catch((err) => handleError(res, err, "Adding project failed"))
}

function findById (req, res) {
  projectService
    .findById(req.params.projectId)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, "Getting project failed"))
}

function modifyProject (req, res) {
  projectService
    .update(req.params.projectId, req.body)
    .then((data) => res.send('Project modified successfully'))
    .catch((err) => handleError(res, err, "Modifying project failed"))
}

function deactivateProject (req, res) {
  projectService
    .deactivate(req.params.projectId)
    .then((data) => res.status(httpCodes.OK).send())
    .catch((err) => handleError(res, err, "Deactivating project failed"))
}

module.exports = router
