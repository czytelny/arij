const {Map} = require('immutable');

const {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
  HIDE_MESSAGE
} = require('./messagesActionTypes');

const {GET_ALL_USER_REQUEST_FAILURE} = require('../../../../shared/userListActionTypes');
const {
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE,
  MODIFY_USER_REQUEST_SUCCESS,
  MODIFY_USER_REQUEST_FAILURE
} = require('../../../../shared/userActionTypes');

const initialState = Map({
  hidingDelay: 3500,
  defaultErrorMessage: "I don't know what happened, I beg your pardon.",
  errorMessage: null,
  successMessage: null,
  isVisible: false
});

const MessagesReducer = function(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
    case GET_ALL_USER_REQUEST_FAILURE:
    case ADD_USER_REQUEST_FAILURE:
    case MODIFY_USER_REQUEST_FAILURE:
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
    case ADD_USER_REQUEST_SUCCESS:
    case MODIFY_USER_REQUEST_SUCCESS:
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

module.exports =  MessagesReducer;
