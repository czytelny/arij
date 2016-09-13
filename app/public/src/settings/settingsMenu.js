import React from 'react'
import {Link} from 'react-router'

const SettingsMenu = () =>
  <div className="settingsMenu">
    <h3>menu</h3>
    <ul className="list-unstyled">
      <li>
        <Link to="/settings/profile" className="btn btn-lg btn-block link-unstyled">
          Your profile
        </Link>
      </li>
      <li>
        <Link to="/settings/user" className="btn btn-lg btn-block link-unstyled">
          Users
        </Link>
      </li>
      <li>
        <Link to="/settings/projects" className="btn btn-lg btn-block link-unstyled">
          Projects
        </Link>
      </li>
    </ul>
  </div>;

export default SettingsMenu;
