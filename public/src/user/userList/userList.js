import React from 'react';

import UserListHeader from './userListHeader'
import UserListRows from './userListRows'


const UserList = React.createClass({
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <UserListHeader/>
          <UserListRows users={this.props.users}/>
        </table>
      </div>
    )
  }
});

export default UserList;
