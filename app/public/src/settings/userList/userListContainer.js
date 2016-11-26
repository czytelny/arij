import React from 'react';
import { connect } from 'react-redux';
import UserList from './userList';
import actions from './userListActionCreators'

const UserListContainer = React.createClass({
  componentDidMount() {
    this.props.getAllUsers();
  },

  render() {
    return (<UserList users={this.props.users}/>);
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    getAllUsers: () => dispatch(actions.getAllUserRequest())
  }
};

const mapStateToProps = function (store) {
  return {
    users: store.userListState.get('users')
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
