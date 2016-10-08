import {createStore, combineReducers, applyMiddleware} from 'redux';
import userListReducer from './settings/userList/userListReducer'
import userReducer from './settings/user/userReducer'
import projectListReducer from './settings/projectList/projectListReducer'
import projectReducer from './settings/project/projectReducer'
import messagesReducer from './app/messages/messagesReducer'
import thunk from 'redux-thunk';
import wsMiddleware from './app/wsMiddleware'

// Combine Reducers
const reducers = combineReducers({
  userListState: userListReducer,
  userState: userReducer,
  projectListState: projectListReducer,
  projectState: projectReducer,
  messagesState: messagesReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, wsMiddleware)
);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


export default store;
