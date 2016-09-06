import React from 'react';
import User from './user';
import socketHandler from './../app/socketHandler';

import {
  ADD_USER_REQUEST,
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE
} from './../../../app/shared/userActionTypes'


const UserContainer = React.createClass({
  getInitialState() {
    return {
      _id: null,
      name: null,
      email: null,
      password: null,
      created_at: null,
      updated_at: null
    }
  },

  componentDidMount() {
    socketHandler.on(ADD_USER_REQUEST_SUCCESS, (response) =>
      console.log("user successfully added! " + JSON.stringify(response)));
    socketHandler.on(ADD_USER_REQUEST_FAILURE, (response) =>
      console.log("user not added:( " + JSON.stringify(response)));
  },

  componentWillUnmount(){
    socketHandler.removeAllListeners(ADD_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(ADD_USER_REQUEST_FAILURE)
  },

  _handleSubmit(e) {
    e.preventDefault();
    socketHandler.emit(ADD_USER_REQUEST, this.state);
  },

  _nameChangeHandler(e){
    e.preventDefault();
    this.setState(Object.assign({}, this.state, {name: e.target.value.trim()}));
  },

  _emailChangeHandler(e){
    e.preventDefault();
    this.setState(Object.assign({}, this.state, {email: e.target.value.trim()}));
  },

  _passwordChangeHandler(e){
    this.setState(Object.assign({}, this.state, {password: e.target.value.trim()}));
  },

  render() {
    return (<User passwordChangeHandler={this._passwordChangeHandler}
                  nameChangeHandler={this._nameChangeHandler}
                  emailChangeHandler={this._emailChangeHandler}
                  submitHandler={this._handleSubmit}/>)
  }
});

export default UserContainer;
