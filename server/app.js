'use strict'

const express = require('express')
const http = require('http')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const passport = require('passport')

const bodyParser = require('body-parser')
const logger = require('winston')
const modelConfig = require('./models/modelConfig')

const app = express()
const server = http.createServer(app)
const socketIO = require('socket.io')(server)
const PORT = process.env.PORT || 3030

const database = require('./database')

require('./services/userService')
require('./config/passportConfig')(passport)

app.set('permission', {role: 'roles'})

app.use(helmet())
app.use(cookieParser()) // read cookies (needed for auth)
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}))

if (app.get('env') === 'development'){
  app.use(require('cors')({ origin: 'http://localhost:8080', credentials: true}))
}

const sessionConfig = {
  key: 'express.sid',       // the name of the cookie where express/connect stores its session_id
  secret: 'big fat cat',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: database.connection}),
  cookieParser: cookieParser
}

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())

const passportSocketIo = require('passport.socketio')
socketIO.use(passportSocketIo.authorize(sessionConfig))

modelConfig.setConfig()

app.use('/login', express.static(path.join(__dirname, 'client', 'login')))
// ------- controllers
require('./controllers/controllers')(app, passport)

server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT)
})
