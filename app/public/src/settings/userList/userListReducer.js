const {Map, List} = require('immutable');

const {GET_ALL_USER_REQUEST_SUCCESS} = require('./userListActionTypes');

const initialState = Map({
  isLoading: false,
  users: List()
});

const userListReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_REQUEST_SUCCESS:
      return state.set('users', List(action.users));
  }

  return state;
};

module.exports = userListReducer;
