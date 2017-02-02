const path = require('path')
const router = require('express').Router()

module.exports = function (passport) {
  router.get('/login', function (req, res) {
    res.sendFile(path.resolve('app/public/unauthorized/login.html'))
  })

  router.get('/css/login.css', function (req, res) {
    res.sendFile(path.resolve('app/public/unauthorized' + req.path))
  })

  router.post('/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?error=true'
  }))

  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/login')
  })

  return router
}
