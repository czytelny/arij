const actions = require('../shared/userActionTypes')
const userListActions = require('../shared/userListActionTypes')
const userService = require('./../services/userService')
const accessControl = require('./../services/accessControl')

const userListAction = require('./../shared/userListActionCreators')
const userAction = require('./../shared/userActionCreators')

module.exports = function (io, app) {
   // WEBSOCKETs
  // io.on('connection', function (socket) {
  //   const user = socket.request.user
  //   registerAccessControl();
  //
  //   socket.on("action", (action) => {
  //     handleAction(io, user, action)
  //   })
  // })

  //REST
  app.get('/api/users', function (req, res) {
    userService.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send({error: "Getting users failed"}))
  })

}

function handleAction (io, user, action) {
  accessControl.isAllowed(user, action)

  switch (action.type) {
    case userListActions.GET_ALL_USER_REQUEST:
      return userService.find().then(
        (users) => io.emit('action', userListAction.getAllUserRequestSuccess(users)),
        (err) => io.emit('action', userListAction.getAllUserRequestFailure("Getting users failed"))
      )
    case actions.GET_USER_REQUEST:
      return userService.findById(action.userId).then(
        (data) => io.emit('action', userAction.getUserRequestSuccess(data)),
        (err) => io.emit('action', userAction.getUserRequestFailure(err))
      )
    case actions.ADD_USER_REQUEST:
      return userService.save(action.user).then(
        (data) => io.emit('action', userAction.addUserRequestSuccess("User added successfully")),
        (err) => io.emit('action', userAction.addUserRequestFailure("Adding user failed"))
      )
    case actions.MODIFY_USER_REQUEST:
      return userService.update(action.user).then(
        (data) => io.emit('action', userAction.modifyUserRequestSuccess("User modified successfully")),
        (err) => io.emit('action', userAction.modifyUserRequestFailure("Modifying user failed"))
      )
  }
}

function registerAccessControl () {
  accessControl.registerPaths([
    {
      type: userListActions.GET_ALL_USER_REQUEST,
      access: [ accessControl.ROLES.ADMIN ]
    },
    {
      type: userListActions.GET_USER_REQUEST,
      access: [ accessControl.ROLES.ADMIN ]
    },
    {
      type: userListActions.ADD_USER_REQUEST,
      access: [ accessControl.ROLES.ADMIN ]
    },
    {
      type: userListActions.MODIFY_USER_REQUEST,
      access: [ accessControl.ROLES.ADMIN ]
    }
  ])

}


