'use strict'

const path = require('path')
const router = require('express').Router()
const {isLoggedIn} = require('./../services/authChecker')

router.get('*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('client/index.html'))
})

module.exports = router

