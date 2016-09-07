import React from 'react'
import {Link} from 'react-router'

const SettingsMenu = () =>
  <div className="settingsMenu">
      <Link to="/settings/user" className="link-unstyled">
        <i className="fa fa-child fa-lg fa-fw"/>Users
      </Link>
  </div>;

export default SettingsMenu;
