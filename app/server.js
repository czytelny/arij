"use strict";

const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const passport = require('passport');

const bodyParser = require('body-parser');
const logger = require('winston');
const modelConfig = require('./models/modelConfig');

const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io')(server);
const PORT = process.env.PORT || 3030;

const database = require('./database');
import userService from './services/userService'

require('./config/passportConfig')(passport);

app.use(helmet());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

const sessionConfig = {
  key: 'express.sid',       // the name of the cookie where express/connect stores its session_id
  secret: "big fat cat",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: database.connection}),
  cookieParser: cookieParser,
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

const passportSocketIo = require("passport.socketio");
socketIO.use(passportSocketIo.authorize(sessionConfig));

modelConfig.setConfig();

// ------- controllers
require('./controllers/userController')(socketIO);
require('./controllers/projectController')(socketIO);
require('./controllers/unauthorizedAreaController')(app, passport);
require('./controllers/restController')(app);


server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT);
});
