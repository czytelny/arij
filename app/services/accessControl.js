const logger = require('winston');
const checkPermissions = require('permission');

const roles = {
  admin: "admin",
  user: "user"
}


module.exports = {
  roles,
  checkPermissions
}
