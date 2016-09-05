import React from 'react';
import {Link} from 'react-router'

const Menu = () =>
  <div className="list-group table-of-contents" role="nav">
    <Link to="/settings/user/new" className="list-group-item">New user</Link>
    <Link to="/settings" className="list-group-item">Back</Link>
  </div>;


export default Menu;
