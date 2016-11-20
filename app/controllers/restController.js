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

  app.head('/head', isLoggedIn, function (req, res) {
    res.sendStatus(200);
  });

  app.get('*', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/index.html"));
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  if (req.xhr) {
    res.sendStatus(401); //Unauthorized
  } else {
    res.redirect('/login');
  }
}

