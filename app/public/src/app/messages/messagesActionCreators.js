import {
  HIDE_ERROR_MESSAGE,
  SHOW_ERROR_MESSAGE
} from './messagesActionTypes'

function hideUserMessageError() {
  return {
    type: HIDE_ERROR_MESSAGE
  }
}
function showUserMessageError(message) {
  return {
    type: SHOW_ERROR_MESSAGE,
    message: message
  }
}

export default {
  showUserMessageError,
  hideUserMessageError
}
