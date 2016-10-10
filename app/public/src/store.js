import {createStore, combineReducers, applyMiddleware} from 'redux';
import userListReducer from './settings/userList/userListReducer'
import userReducer from './settings/user/userReducer'
import projectListReducer from './settings/projectList/projectListReducer'
import projectReducer from './settings/project/projectReducer'
import messagesReducer from './app/messages/messagesReducer'
import thunk from 'redux-thunk';
import socketIO from './socketHandler'
import socketIOMiddleware from './socket-io-middleware'
import loggerMiddleware from './loggerMiddleware'

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
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);

export default store;
