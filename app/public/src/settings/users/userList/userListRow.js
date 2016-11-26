import React from 'react';
import {Link} from 'react-router'


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
      <td>
        <Link to={`/settings/user/${user._id}`}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"/>
        </Link>
      </td>
    </tr>
  ;

export default UserListRow;
