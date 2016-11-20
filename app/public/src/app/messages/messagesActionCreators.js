const {
  SHOW_SUCCESS_MESSAGE,
  HIDE_MESSAGE,
  SHOW_ERROR_MESSAGE
} = require('./messagesActionTypes');

function showSuccessMessage(message) {
  return {
    type: SHOW_SUCCESS_MESSAGE,
    message: message
  }
}

function showErrorMessage(message) {
  return {
    type: SHOW_ERROR_MESSAGE,
    message: message
  }
}

function hideMessage() {
  return {
    type: HIDE_MESSAGE
  }
}

function hideMessageWithDelay(delay) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(hideMessage());
    }, delay)
  };
}

module.exports = {
  showSuccessMessage,
  showErrorMessage,
  hideMessage,
  hideMessageWithDelay
}
