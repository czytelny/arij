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
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/login' // redirect back to the signup page if there is an error
  }));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
  });
};
