const LocalStrategy = require('passport-local').Strategy
const userService = require('../services/userService')

module.exports = function (passport) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
      userService.findByEmail(email).then(function (user) {
        if (!user) {
          return done(null, false)
        }
        if (!user.verifyPassword(password)) {
          return done(null, false)
        }
        if (!user.active) {
          return done(null, false)
        }
        return done(null, user)
      }).catch(function (err) {
        return done(err)
      })
    }
  ))

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user._id)
  })

  passport.deserializeUser(function (id, done) {
    userService.findById(id).then(function (user) {
      done(null, user)
    }).catch(function (err) {
      done(err, null)
    })
  })
}
