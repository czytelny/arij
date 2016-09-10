import {createStore, combineReducers} from 'redux';
import userListReducer from './settings/userList/userListReducer'
import userReducer from './settings/user/userReducer'

// Combine Reducers
const reducers = combineReducers({
  userListState: userListReducer,
  userState: userReducer
});

// Create a store by passing in the reducer
const store = createStore(reducers);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


export default store;
