import React from 'react';
import {Link} from 'react-router'

const SettingsNavbarBtn = () =>
  <div>
    <div className="actionBtn">
      <Link to="/settings/users">
        <div><i className="fa fa-cogs"> </i></div>
        <div className="title">settings</div>
      </Link>
    </div>
  </div>;


export default SettingsNavbarBtn;
