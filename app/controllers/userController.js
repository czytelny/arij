const router = require('express').Router()
const userService = require('./../services/userService')
const accessControl = require('./../services/accessControl')

router.get('/', function (req, res) {
  userService.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).send({error: "Getting users failed"}))
})

router.get('/:userId', function (req, res) {
  return userService.findById(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send({error: "Getting user failed"}))
})

module.exports = router;


// function handleAction (io, user, action) {
//   accessControl.isAllowed(user, action)
//
//   switch (action.type) {
//     case userListActions.GET_ALL_USER_REQUEST:
//       return userService.find().then(
//         (users) => io.emit('action', userListAction.getAllUserRequestSuccess(users)),
//         (err) => io.emit('action', userListAction.getAllUserRequestFailure("Getting users failed"))
//       )
//     case actions.GET_USER_REQUEST:
//       return userService.findById(action.userId).then(
//         (data) => io.emit('action', userAction.getUserRequestSuccess(data)),
//         (err) => io.emit('action', userAction.getUserRequestFailure(err))
//       )
//     case actions.ADD_USER_REQUEST:
//       return userService.save(action.user).then(
//         (data) => io.emit('action', userAction.addUserRequestSuccess("User added successfully")),
//         (err) => io.emit('action', userAction.addUserRequestFailure("Adding user failed"))
//       )
//     case actions.MODIFY_USER_REQUEST:
//       return userService.update(action.user).then(
//         (data) => io.emit('action', userAction.modifyUserRequestSuccess("User modified successfully")),
//         (err) => io.emit('action', userAction.modifyUserRequestFailure("Modifying user failed"))
//       )
//   }
// }


