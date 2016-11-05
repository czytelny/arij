"use strict";

const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io');
const helmet = require('helmet');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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

app.use(express.static(path.join(__dirname, 'public')));

passport.use(new LocalStrategy(
  function (email, password, done) {
    userService.findByEmail(email).then(function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      if (!user.validPassword(password)) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

modelConfig.setConfig();

// ------- controllers
const routes = require('./controllers/restController');
app.use('/', routes);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT);
});
