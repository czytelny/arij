const api = "/api"

module.exports = function (app, passport) {
  // ///////////
  // // API
  app.use(`${api}/users`, require('./userController'))


  // ///////////
  // // Other resources
  app.use(require('./authorizationController')(passport))
  app.use(require('./staticController'))

}
