import React from 'react'
import {Link} from 'react-router'
import Logo from './../app/logo'

const settingsSidenav = () =>
  <div id="settingsSidenav">
    <Logo/>

    <div className="links">
      <ul className="list-unstyled">
        <li>
          <Link to="/settings/profile" activeClassName="chosen"
                className="disabled btn btn-lg link-unstyled">
            Your profile
          </Link>
        </li>
        <li>
          <Link to="/settings/users" activeClassName="chosen"
                className="btn btn-lg link-unstyled">
            Users
          </Link>
        </li>
        <li>
          <Link to="/settings/roles" activeClassName="chosen"
                className="disabled btn btn-lg link-unstyled">
            System Roles
          </Link>
        </li>
        <li>
          <Link to="/settings/project" activeClassName="chosen"
                className="btn btn-lg link-unstyled">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/settings/projects" activeClassName="chosen"
                className="btn btn-lg link-unstyled">
            Projects (REST)
          </Link>
        </li>
      </ul>
    </div>
  </div>;

export default settingsSidenav;
