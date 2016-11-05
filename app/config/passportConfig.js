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
    function (email, password, done) {
      console.log("KURA");

      console.log(email);
      userService.findByEmail(email).then(function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          logger.info('incorrent username');
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.validPassword(password)) {
          logger.info('incorrent password');
          return done(null, false, {message: 'Incorrect password.'});
        }
        logger.info('everything fine!');
        return done(null, user);
      });
    }
  ));

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    logger.info('serializing user');
    done(null, user.id);
  });

  passport.deserializeUser(function (email, done) {
    logger.info('deserializing user user');
    userService.findByEmail(email).then(function (err, user) {
      done(err, user);
    });
  });

};
