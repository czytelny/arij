import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  VALIDATE_USER,
  SAVING_USER_IN_PROGRESS,
  SAVING_USER_FINISHED
} from '../../../../shared/userActionTypes'


function userNameChanged(name) {
  return {
    type: USER_NAME_CHANGED,
    name: name
  }
}

function userPasswordChanged(password) {
  return {
    type: USER_PASSWORD_CHANGED,
    password: password
  }
}

function userPasswordConfirmChanged(password) {
  return {
    type: USER_PASSWORD_CONFIRM_CHANGED,
    password: password
  }
}

function userEmailChanged(email) {
  return {
    type: USER_EMAIL_CHANGED,
    email: email
  }
}

function validateUser() {
  return {
    type: VALIDATE_USER
  }
}

function savingInProgress() {
  return {
    type: SAVING_USER_IN_PROGRESS
  }
}

function savingFinished() {
  return {
    type: SAVING_USER_FINISHED
  }
}

export default {
  userNameChanged,
  userPasswordChanged,
  userEmailChanged,
  userPasswordConfirmChanged,
  validateUser,
  savingInProgress,
  savingFinished
}
