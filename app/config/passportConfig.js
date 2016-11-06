const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/userService');
const logger = require('winston');

module.exports = function (passport) {
  passport.use(new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
      userService.findByEmail(email).then(function (user) {
        if (!user) {
          logger.info('incorrent username');
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.verifyPassword(password)) {
          logger.info('incorrent password');
          return done(null, false, {message: 'Incorrect password.'});
        }
        logger.info('everything fine!');
        return done(null, user);
      }).catch(function (err) {
        return done(err);
      });
    }
  ));

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    userService.findById(id).then(function (user) {
      done(null, user);
    }).catch(function (err) {
      done(err, null);
    });
  });

};
