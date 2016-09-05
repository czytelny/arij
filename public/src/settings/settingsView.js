import React from 'react'
import Header from './../app/header'
import SettingsMenu from './settingsMenu'

const settingsView = () =>
<div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-9">
      <p>This is settings view. use left menu</p>
    </div>
  </div>
</div>;

export default settingsView;
