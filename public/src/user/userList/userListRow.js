var React = require('react');


const UserListRow = ({user}) =>
  <tr>
    <td>
      {user._id}
    </td>
    <td>
      {user.name}
    </td>
    <td>
      {user.email}
    </td>
  </tr>;

export default UserListRow;
