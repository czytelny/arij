const initialState = {
  state: []
};
const userReducer = function(state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_USER') {
    state.concat(action.user);
  }
  return state;
};

export default userReducer;
