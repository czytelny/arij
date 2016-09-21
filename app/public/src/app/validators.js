function isRequiredError(objToTest) {
  return !(objToTest);
}

function isEmailFormatError(textToTest) {
  let pattern = /^[^@]+@[^@]+\.[^@]+$/;
  return !pattern.test(textToTest);
}

export {
  isRequiredError,
  isEmailFormatError
}
