const router = require('express').Router()
const userService = require('./../services/userService')
const {handleError} = require('./errorHandler')
const {checkPermissions, roles} = require('./../services/accessControl')

router.get('/', checkPermissions([roles.user]), loggedUsername)

function loggedUsername (req, res) {
  userService
    .findById(req.user["_id"])
    .then((user) => res.json({
      email: user.email,
      roles: user.roles
    }))
    .catch((err) => handleError(res, err, 'Getting username'))
}

module.exports = router
