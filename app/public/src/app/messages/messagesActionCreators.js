import {
  SHOW_SUCCESS_MESSAGE,
  HIDE_SUCCESS_MESSAGE,
  HIDE_MESSAGE,
  SHOW_ERROR_MESSAGE
} from './messagesActionTypes'

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

export default {
  showSuccessMessage,
  showErrorMessage,
  hideMessage
}
