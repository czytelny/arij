const path = require('path');
const logger = require('winston');

module.exports = function (app, passport) {
  app.get('/login', function (req, res) {
    res.sendFile(path.resolve("app/public/unauthorized/login.html"));
  });

  app.get('/css/login.css', function (req, res) {
    res.sendFile(path.resolve("app/public/unauthorized" + req.path))
  });

  app.post('/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?error=true'
  }));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
  });
};
