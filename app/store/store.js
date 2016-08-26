import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import usersReducer from './../reducers/usersReducer';

export default function makeStore() {
  return createStore(usersReducer,
    applyMiddleware(
      thunkMiddleware
    ));
}
