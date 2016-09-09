import {createStore, combineReducers} from 'redux';
import userListReducer from './settings/userList/userListReducer'

// Combine Reducers
const reducers = combineReducers({
  userListState: userListReducer
});

// Create a store by passing in the reducer
const store = createStore(reducers);


export default store;
