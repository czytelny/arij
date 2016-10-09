import {Map} from 'immutable'
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_MESSAGE
} from './messagesActionTypes'
import {
  GET_ALL_USER_REQUEST_FAILURE
} from '../../../../shared/userActionTypes'
const initialState = Map({
  hidingDelay: 3500,
  defaultErrorMessage: "I don't know what happened, I beg your pardon.",
  errorMessage: null,
  successMessage: null,
  isVisible: false
});

const MessagesReducer = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
    case GET_ALL_USER_REQUEST_FAILURE:
      if (action.message) {
        return state.merge({
          isVisible: true,
          errorMessage: action.message
        })
      } else {
        return state.merge({
          isVisible: true,
          errorMessage: state.get("defaultErrorMessage")
        })
      }
    case SHOW_SUCCESS_MESSAGE:
      return state.merge({
        isVisible: true,
        successMessage: action.message
      });
    case HIDE_MESSAGE:
      return state.merge({
        isVisible: false,
        successMessage: null,
        errorMessage: null
      })
  }
  return state;
};

export default MessagesReducer;
