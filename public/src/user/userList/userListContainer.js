import React from 'react';
import UserList from './userList';
import socketHandler from './../../app/socketHandler';

import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS
} from './../../../../app/shared/userActionTypes'


var UserListContainer = React.createClass({
  getInitialState() {
    return {
      users: []
    }
  },

  componentDidMount() {
    socketHandler.emit(GET_ALL_USER_REQUEST);
    socketHandler.on(GET_ALL_USER_REQUEST_SUCCESS, (response) => {
      this.setState({users: response});
    });
  },

  render() {
    return (<UserList users={this.state.users}/>);
  }
});

export default UserListContainer;
