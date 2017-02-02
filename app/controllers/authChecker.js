module.exports = {
  isLoggedIn
}

// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next()
  }

  if (req.xhr) {
    res.sendStatus(401) // Unauthorized
  } else {
    res.redirect('/login')
  }
}
