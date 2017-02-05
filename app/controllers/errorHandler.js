const logger = require('winston')

function handleError (res, error, errorMsg) {
  logger.info(error);
  return res.status(500).send({errorMsg})
}

module.exports = {
  handleError
};
