import React from 'react';
import {Link} from 'react-router'

const Navbar = () =>
  <div id="navbar" className="row">
    <div className="col-md-12 text-right">
      <Link to="/settings">
        <i className="fa fa-cogs fa-2x"/>
        settings
      </Link>
    </div>
  </div>;


export default Navbar;
