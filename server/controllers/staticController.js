'use strict'

const path = require('path')
const router = require('express').Router()
const {isLoggedIn} = require('./../services/authChecker')

router.get('/static/css/*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('client/' + req.path))
})

router.get('/static/js/*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('client/' + req.path))
})

router.get('*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('client/index.html'))
})

module.exports = router

