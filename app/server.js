"use strict";

const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io');
const helmet = require('helmet');
const passport = require('passport');
const flash = require('connect-flash');

const bodyParser = require('body-parser');
const logger = require('winston');
const modelConfig = require('./models/modelConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const PORT = process.env.PORT || 3030;

import database from './database'
import userController from './controllers/userController'
import projectController from './controllers/projectController'
import userService from './services/userService'

const userCtrl = userController(io);
const projectCtrl = projectController(io);
app.use(helmet());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({secret: "big fat cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

modelConfig.setConfig();

// ------- controllers
require('./controllers/restController')(app, passport);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}

server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT);
});
