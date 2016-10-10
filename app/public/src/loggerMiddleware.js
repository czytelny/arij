/**
 * Logs all actions and states after they are dispatched.
 */
export default store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result
};

