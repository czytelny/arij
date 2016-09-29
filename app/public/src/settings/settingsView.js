import React from 'react'
import Navbar from '../app/navbar/navbar'
import SettingsMenu from './settingsMenu'

const settingsView = () =>
  <div className="row content">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-10">
      <Navbar/>
      <div className="mainView">
        <p>This is settings view. use left menu</p></div>
    </div>
  </div>;

export default settingsView;
