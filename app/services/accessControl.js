const checkPermissions = require('permission')
const httpStatus = require('http-status-codes')

const roles = {
  admin: 'admin',
  user: 'user'
}

/**
 * Check whether user wants to change his own data
 */
function checkIdPrivilege (req, res, next) {
  if (req.user["_id"] === req.params.userId) {
    next();
  } else {
    res.status(httpStatus.FORBIDDEN).send(null);
  }

}

module.exports = {
  roles,
  checkPermissions,
  checkIdPrivilege
}
