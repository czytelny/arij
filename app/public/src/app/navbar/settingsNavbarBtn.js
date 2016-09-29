import React from 'react';
import {Link} from 'react-router'

const SettingsNavbarBtn = () =>
  <div className="actionBtn">
    <Link to="/settings/users">
     <div><i className="fa fa-cogs fa-2x"> </i></div>
      <div className="title">settings</div>
    </Link>
  </div>;


export default SettingsNavbarBtn;
