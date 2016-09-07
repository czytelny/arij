import {createStore, combineReducers} from 'redux';
import userReducer from './user/userReducer'

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer
});

// Create a store by passing in the reducer
const store = createStore(reducers);


export default store;
