import React from 'react';
import UserList from './userList';
import socketHandler from './../../app/socketHandler';

import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS
} from './../../../../shared/userActionTypes'


const UserListContainer = React.createClass({
  getInitialState() {
    return {
      users: []
    }
  },

  componentDidMount() {
    socketHandler.emit(GET_ALL_USER_REQUEST);
    socketHandler.on(GET_ALL_USER_REQUEST_SUCCESS, this._getAllUserRequestHandler);
  },

  componentWillUnmount() {
    socketHandler.removeListener(GET_ALL_USER_REQUEST_SUCCESS, this._getAllUserRequestHandler);
  },

  _getAllUserRequestHandler(response) {
    this.setState({users: response});
  },


  render() {
    return (<UserList users={this.state.users}/>);
  }
});

export default UserListContainer;
