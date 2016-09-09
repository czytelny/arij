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


export default store;
