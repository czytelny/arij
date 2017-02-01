import React from 'react';
import SettingsNavbarBtn from './settingsNavbarBtn'
import LogoutNavbarBtn from './logoutNavbarBtn'

const Navbar = () =>
  <div id="navbar" className="row">
    <div className="col-md-12 text-right actionContainer">
      <SettingsNavbarBtn/>
      <LogoutNavbarBtn/>
    </div>
  </div>;


export default Navbar;
