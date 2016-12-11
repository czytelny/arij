import React, { Component } from 'react';
import { Link } from 'react-router';

import Navbar from './../../../app/navbar/navbar';
import SettingsMenu from './../../settingsSidenav';
import ProjectRestListContainer from './ProjectRestListContainer';

export default class ProjectRestListView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <SettingsMenu />
          </div>
          <div className="col-sm-10 mainView">
            <Navbar />
            <div className="col-sm-12">
              <h1>
                Users <Link to="/settings/projects" className="badge">New project</Link>
              </h1>
              <ProjectRestListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
