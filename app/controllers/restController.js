"use strict";

const path = require('path');
const logger = require('winston');


module.exports = function (app) {
  app.get('/css/arij.css', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });
  app.get('/css/font-awesome.min.css', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });
  app.get('/fonts/*', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });
  app.get('/dist/*', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });

  app.get('/', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/index.html"));
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  logger.info('user not authenticated');
  // if they aren't redirect them to the home page
  res.redirect('/login');
}

