"use strict";

const express = require('express');
const path = require('path');
const logger = require('winston');


module.exports = function (app, passport) {
  app.get('/css/*.css', function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });
  app.get('/fonts/*', function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });
  app.get('/dist/*', function (req, res) {
    res.sendFile(path.resolve("app/public/" + req.path))
  });

  app.get('/login', function (req, res) {
    res.sendFile(path.resolve("app/public/login.html"));
  });

  app.get('/', isLoggedIn, function (req, res) {
    res.sendFile(path.resolve("app/public/index.html"));
  });

  // app.post('/signup', passport.authenticate('local', {
  //   successRedirect : '/index', // redirect to the secure profile section
  //   failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //   failureFlash : true // allow flash messages
  // }));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
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

