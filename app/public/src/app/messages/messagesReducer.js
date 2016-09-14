import {Map} from 'immutable'
import {
  HIDE_ERROR_MESSAGE,
  SHOW_ERROR_MESSAGE
} from './messagesActionTypes'

const initialState = Map({
  hidingDelay: 2000,
  errorMessage: "",
  isVisible: false
});

const MessagesReducer = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      return state.merge({
        isVisible: true,
        errorMessage: action.message
      });
    case HIDE_ERROR_MESSAGE:
      return state.set("isVisible", false);
  }
  return state;
};

export default MessagesReducer;
