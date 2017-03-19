const router = require('express').Router()
const rolesService = require('./../services/rolesService')
const {handleError} = require('./errorHandler')
const {checkPermissions, roles} = require('./../services/accessControl')

router.get('/', checkPermissions([roles.admin]), getAllRoles)
router.post('/', checkPermissions([roles.admin]), save)

function getAllRoles (req, res) {
  rolesService
    .findAll()
    .then((roles) => res.json(roles))
    .catch((err) => handleError(res, err, 'Getting roles failed'))
}

function save (req, res) {
  rolesService
    .save(req.body)
    .then((roles) => res.json(roles))
    .catch((err) => handleError(res, err, 'Saving roles failed'))
}

module.exports = router
