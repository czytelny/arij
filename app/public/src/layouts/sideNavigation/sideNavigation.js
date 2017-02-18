import React from 'react';
import {Link} from 'react-router'

const SideNavigation = () =>
  <nav className="sidebar-left">
    <h3>Sidebar</h3>
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
  </nav>;

export default SideNavigation;
