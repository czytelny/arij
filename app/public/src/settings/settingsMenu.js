import React from 'react'
import {Link} from 'react-router'
import Logo from './../app/logo'

const SettingsMenu = () =>
  <div>
    <Logo/>

    <ul className="list-unstyled">
      <li>
        <Link to="/settings/profile" activeClassName="chosen"
              className="disabled btn btn-lg btn-block link-unstyled">
          Your profile
        </Link>
      </li>
      <li>
        <Link to="/settings/users" activeClassName="chosen"
              className="btn btn-lg btn-block link-unstyled">
          Users
        </Link>
      </li>
      <li>
        <Link to="/settings/roles" activeClassName="chosen"
              className="disabled btn btn-lg btn-block link-unstyled">
          System Roles
        </Link>
      </li>
      <li>
        <Link to="/settings/project" activeClassName="chosen"
              className="btn btn-lg btn-block link-unstyled">
          Projects
        </Link>
      </li>
    </ul>
  </div>;

export default SettingsMenu;
