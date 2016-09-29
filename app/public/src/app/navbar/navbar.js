import React from 'react';
import {Link} from 'react-router'
import SettingsNavbarBtn from './settingsNavbarBtn'

const Navbar = () =>
  <div id="navbar" className="row">
    <div className="col-md-12 text-right actionContainer">
      <SettingsNavbarBtn/>
    </div>
  </div>;


export default Navbar;
