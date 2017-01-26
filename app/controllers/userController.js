const router = require('express').Router()
const userService = require('./../services/userService')
const {isLoggedIn} = require('./authChecker')


router.use(isLoggedIn)

router.get('/', function (req, res) {
  userService.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).send({error: "Getting users failed"}))
})

router.get('/:userId', function (req, res) {
  userService.findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send({error: "Getting user failed"}))
})

router.post('/', function (req, res) {
  userService.save(req.body)
    .then((data) => res.send("User added successfully"))
    .catch((err) => res.status(500).send("Adding user failed"))
})

router.put('/:userId', function (req, res) {
  userService.update(req.params.userId, req.body)
    .then((data) => res.send("User modified successfully"))
    .catch((err) => res.status(500).send("Modifying user failed"))
})

module.exports = router;
