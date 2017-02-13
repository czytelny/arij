const router = require('express').Router()
const userService = require('./../services/userService')
const {checkIdPrivilege, checkPermissions, roles} = require('./../services/accessControl')
const {handleError} = require('./errorHandler')
const httpCodes = require('http-status-codes')


router.get('/', checkPermissions([roles.admin]), findAll)
router.post('/', checkPermissions([roles.admin]), save)

router.put('/:userId', checkPermissions([roles.admin]), modifyUser)
router.delete('/:userId', checkPermissions([roles.admin]), deactivate)
router.patch('/:userId', checkPermissions([roles.user]), checkIdPrivilege, modifyUserPartial)
router.get('/:userId', checkPermissions([roles.user]), findById)


function findAll (req, res) {
  userService
    .find()
    .then((users) => res.json(users))
    .catch((err) => handleError(res, err, 'Getting users failed'))
}

function findById (req, res) {
  userService
    .findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Getting user failed'))
}

function save (req, res) {
  userService
    .save(req.body)
    .then((user) => res.json(user))
    .catch((err) => handleError(res, err, 'Adding user failed'))
}

function deactivate (req, res) {
  userService
    .deactivate(req.params.userId)
    .then(() => res.status(httpCodes.OK).send())
    .catch((err) => handleError(res, err, 'Deactivating user failed'))
}

function modifyUser (req, res) {
  userService
    .modify(req.params.userId, req.body)
    .then((user) => res.json(user))
    .catch((err) => handleError(res, err, 'Modifying user failed'))
}

function modifyUserPartial (req, res) {
  userService
    .modifyPartial(req.params.userId, req.body)
    .then((user) => res.json(user))
    .catch((err) => handleError(res, err, 'Modifying user failed'))
}

module.exports = router
