import React from 'react';
import {Link} from 'react-router'

const Header = () =>
  <div>
    <div className="navbar navbar-main navbar-default">
      <div className="navbar-header navbar-brand">
          ARIJ
      </div>
    </div>
    <div className="navbar mainMenu text-right">
      <div className="col-sm-12">
        <Link to="/settings">
          <button className="btn btn-default fa fa-cogs fa-2x">
            </button>
        </Link>
      </div>

    </div>
  </div>;


export default Header;
