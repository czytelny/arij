const api = '/api'

module.exports = function (app, passport) {
  // ///////////
  // // API
  app.use(`${api}/activeUser`, require('./activeUserController'))
  app.use(`${api}/users`, require('./userController'))
  app.use(`${api}/projects`, require('./projectController'))
  app.use(`${api}/roles`, require('./rolesController'))

  // ///////////
  // // Other resources
  app.use(require('./loginController')(passport))
  app.use(require('./staticController'))
}
