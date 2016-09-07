var React = require('react');

import UserListRow from './userListRow'

const UserListRows = (props) =>
    <tbody>
    {props.users.map(function (user) {
      return (
        <UserListRow key={user._id} user={user}/>
      );
    })}
    </tbody>;



export default UserListRows;
