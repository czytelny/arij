const router = require('express').Router()
const userService = require('./../services/userService')
const {checkPermissions, roles} = require('./../services/accessControl')
const {handleError} = require('./errorHandler')

const accessRoles = [roles.user, roles.admin]

router.get('/', checkPermissions(accessRoles), function (req, res) {
  userService
    .find()
    .then((users) => res.json(users))
    .catch((err) => handleError(res, err, 'Getting users failed'))
})

router.get('/:userId', checkPermissions(accessRoles), function (req, res) {
  userService
    .findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Getting user failed'))
})

router.post('/', checkPermissions(accessRoles), function (req, res) {
  userService
    .save(req.body)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Adding user failed'))
})

router.put('/:userId', checkPermissions(accessRoles), function (req, res) {
  userService
    .update(req.params.userId, req.body)
    .then((data) => res.send('User modified successfully'))
    .catch((err) => handleError(res, err, 'Modifying user failed'))
})

module.exports = router
