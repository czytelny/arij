const router = require('express').Router()
const userService = require('./../services/userService')
const {checkPermissions, roles} = require('./../services/accessControl');

const accessRoles = [roles.user, roles.admin];

router.get('/', checkPermissions(accessRoles), function (req, res) {
  userService.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).send({error: "Getting users failed"}))
})

router.get('/:userId', checkPermissions(accessRoles), function (req, res) {
  userService.findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send({error: "Getting user failed"}))
})

router.post('/', checkPermissions(accessRoles),  function (req, res) {
  userService.save(req.body)
    .then((data) => res.send("User added successfully"))
    .catch((err) => res.status(500).send("Adding user failed"))
})

router.put('/:userId', checkPermissions(accessRoles), function (req, res) {
  userService.update(req.params.userId, req.body)
    .then((data) => res.send("User modified successfully"))
    .catch((err) => res.status(500).send("Modifying user failed"))
})

module.exports = router;
