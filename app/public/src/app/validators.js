const _ = require('underscore');

function isRequiredError(objToTest) {
  return !(objToTest);
}

function isEmailFormatError(textToTest) {
  let pattern = /^[^@]+@[^@]+\.[^@]+$/;
  return !pattern.test(textToTest);
}

function isFormValid(formObj) {
  let errors = _.omit(formObj.toJS(), "isValid");
  return JSON.stringify(errors).indexOf("true") === -1;
}

module.exports = {
  isRequiredError,
  isEmailFormatError,
  isFormValid
};
