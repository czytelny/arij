const router = require('express').Router()
const userService = require('./../services/userService')
const {checkIdPrivilege, checkPermissions, roles} = require('./../services/accessControl')
const {handleError} = require('./errorHandler')
const httpCodes = require('http-status-codes')


router.get('/', checkPermissions([roles.admin]), function (req, res) {
  userService
    .find()
    .then((users) => res.json(users))
    .catch((err) => handleError(res, err, 'Getting users failed'))
})

router.get('/:userId', checkPermissions([roles.admin]), function (req, res) {
  userService
    .findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Getting user failed'))
})

router.post('/', checkPermissions([roles.admin]), function (req, res) {
  userService
    .save(req.body)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Adding user failed'))
})

router.delete('/:userId', checkPermissions([roles.admin]), function (req, res) {
  userService
    .deactivate(req.params.userId)
    .then((data) => res.status(httpCodes.OK).send())
    .catch((err) => handleError(res, err, 'Deactivating user failed'))
})

router.patch('/:userId/roles', checkPermissions([roles.admin]), function (req, res) {
  userService
    .changeUserRoles(req.params.userId, req.body)
    .then((user) => res.json(user))
    .catch((err) => handleError(res, err, 'Modifying user roles failed'))
})

router.patch('/:userId/nickName', checkPermissions([roles.user]), checkIdPrivilege, function (req, res) {
  userService
    .changeNickName(req.params.userId, req.body)
    .then((data) => res.json(data))
    .catch((err) => handleError(res, err, 'Modifying user nick name user failed'))
})

router.patch('/:userId/name', checkPermissions([roles.user]), checkIdPrivilege, function (req, res) {

})

router.patch('/:userId/email', checkPermissions([roles.user]), checkIdPrivilege, function (req, res) {

})

router.patch('/:userId/password', checkPermissions([roles.user]), checkIdPrivilege, function (req, res) {

})

module.exports = router
