"use strict";

const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io');
const helmet = require('helmet');
const passport = require('passport');

const bodyParser = require('body-parser');
const logger = require('winston');
const modelConfig = require('./models/modelConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const PORT = process.env.PORT || 3030;

const database = require('./database');
import userController from './controllers/userController'
import projectController from './controllers/projectController'
import userService from './services/userService'

const userCtrl = userController(io);
const projectCtrl = projectController(io);
require('./config/passportConfig')(passport);

app.use(helmet());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: "big fat cat",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  store: new MongoStore({mongooseConnection: database.connection})
}));
app.use(passport.initialize());
app.use(passport.session());


modelConfig.setConfig();

// ------- controllers
require('./controllers/unauthorizedAreaController')(app, passport);
require('./controllers/restController')(app);


server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT);
});
