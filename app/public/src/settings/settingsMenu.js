import React from 'react'
import {Link} from 'react-router'

const SettingsMenu = () =>
  <div className="settingsMenu">
    <ul className="list-unstyled">
      <li>
        <Link to="/settings/profile" className="btn btn-lg link-unstyled">
          <i className="fa fa-child fa-lg fa-fw"/>
          Your profile
        </Link>
      </li>
      <li>
        <Link to="/settings/user" className="btn btn-lg link-unstyled">
          <i className="fa fa-users fa-lg fa-fw"/>
          Users
        </Link>
      </li>
      <li>
        <Link to="/settings/projects" className="btn btn-lg link-unstyled">
          <i className="fa fa-book fa-lg fa-fw"/>
          Projects
        </Link>
      </li>
    </ul>
  </div>;

export default SettingsMenu;
