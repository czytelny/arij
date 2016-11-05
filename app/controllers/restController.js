"use strict";

const path = require('path');

module.exports = function (app, passport) {
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './../public', 'login.html'))
  });

  app.get('/', isLoggedIn, function (req, res) {
    res.sendFile(__dirname + "/../public/index.html");
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}

