const logger = require('winston');

const roles = {
  admin: "admin",
  user: "user"
}

/*
 Every path in portal which need some access controll, eg. /Projects,
 needs to be registered here
 */
const registeredPaths = {
  "projects": roles.admin //todo perhaps it should be an array

}


function isAllowed(user, action) {
//todo
}

function registerPaths(path, role) {
//todo
}

function isAuthorized(req, res, next) {
  if (req.baseUrl.includes("projects")) { //temporary hardcoded, todo generic mechanism
    //this path is considered as a path which should be authorized

    logger.info(`${req.user}`)
    if (!req.user.roles.length){
      logger.warn(`meh, user ${req.user.name} is *NOT* authorized to process this request, he don't have any roles! `)
      res.sendStatus(401); //Unauthorized
    }

    req.user.roles.find((item) => {
      //check whether user has a role which given path requires
      if (item === registeredPaths.projects) {
        logger.info(`well done! user '${req.user.name}' is authorized to process this request`)
        next()
      } else {
        logger.warn(`meh, user ${req.user.name} is *NOT* authorized to process this request! `)
        res.sendStatus(401); //Unauthorized
      }
    })

  } else {
    next()
  }
}


module.exports = {
  roles,
  isAuthorized,
  isAllowed,
  registerPaths
}
