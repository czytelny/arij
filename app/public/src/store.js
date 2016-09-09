import {createStore, combineReducers} from 'redux';
import userReducer from './settings/userList/userListReducer'

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer
});

// Create a store by passing in the reducer
const store = createStore(reducers);


export default store;
