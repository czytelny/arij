'use strict'

const path = require('path')
const router = require('express').Router()
const {isLoggedIn} = require('./authChecker')

router.get('/css/arij.css', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('app/public/' + req.path))
})
router.get('/css/font-awesome.min.css', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('app/public/' + req.path))
})
router.get('/fonts/*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('app/public/' + req.path))
})
router.get('/dist/*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('app/public/' + req.path))
})

router.head('/head', isLoggedIn, function (req, res) {
  res.sendStatus(200)
})

router.get('*', isLoggedIn, function (req, res) {
  res.sendFile(path.resolve('app/public/index.html'))
})

module.exports = router

