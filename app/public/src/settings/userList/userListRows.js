import React from 'react';

import UserListRow from './userListRow'

const UserListRows = ({users}) =>
    <tbody>
    {users.map(function (user) {
      return (
          <UserListRow key={user._id} user={user}/>
      );
    })}
    </tbody>;



export default UserListRows;
