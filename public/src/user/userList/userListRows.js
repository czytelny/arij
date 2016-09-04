var React = require('react');

import UserListRow from './userListRow'

const UserListRows = function (props) {
  return (
    <tbody>
    {props.users.map(function (user) {
      return (
        <UserListRow key={user.id} user={user}/>
      );
    })}
    </tbody>
  )
};

export default UserListRows;
