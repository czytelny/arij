import React from 'react';

import UserListHeader from './userListHeader'
import UserListRows from './userListRows'


const UserList = (props) =>
  <div className="table-responsive">
    <table className="table table-hover">
      <UserListHeader/>
      <UserListRows users={props.users}/>
    </table>
  </div>;

export default UserList;
