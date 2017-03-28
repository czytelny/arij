const path = require('path')
const router = require('express').Router()
const userService = require('./../services/userService')

module.exports = function (passport) {
  router.get('/login', function (req, res) {
    res.sendFile(path.resolve('client/login/login.html'))
  })

  router.post('/signin', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login?error=true'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        userService.alterLastLogin(user._id);
        return res.redirect('/');
      });
    })(req, res, next)
  });

  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/login')
  })

  return router
}
