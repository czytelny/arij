const userListActionTypes = require('./../shared/userListActionTypes');

const ROLES = {
  ADMIN: "admin",
  PROJECT_OWNER: "p_owner",
  DEVELOPER: "developer",
  TESTER: "tester",
  ANAL: "analytics",
  SPECTATOR: "spectator"
}

function isAllowed(user, action){
//todo
}

function registerPaths(path, role){
//todo
}




module.exports = {
  ROLES,
  isAllowed,
  registerPaths
}
