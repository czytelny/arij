import {Map} from 'immutable'
import _ from 'underscore'

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

export {
  isRequiredError,
  isEmailFormatError,
  isFormValid
}
