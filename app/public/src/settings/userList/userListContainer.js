import React from 'react';
import { connect } from 'react-redux';
import store from '../../store'
import UserList from './userList';
import socketHandler from '../../app/socketHandler';

import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'


const UserListContainer = React.createClass({
  componentDidMount() {
    socketHandler.emit(GET_ALL_USER_REQUEST);
    socketHandler.on(GET_ALL_USER_REQUEST_SUCCESS, this._getAllUserRequestHandler);
  },

  componentWillUnmount() {
    socketHandler.removeListener(GET_ALL_USER_REQUEST_SUCCESS, this._getAllUserRequestHandler);
  },

  _getAllUserRequestHandler(response) {
    store.dispatch({
      type: GET_ALL_USER_REQUEST_SUCCESS,
      users: response
    });
  },

  render() {
    return (<UserList users={this.props.users}/>);
  }
});

const mapStateToProps = function (store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
