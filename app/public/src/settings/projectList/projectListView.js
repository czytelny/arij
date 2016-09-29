import React from 'react';

import Navbar from '../../app/navbar/navbar'
import ProjectListContainer from './projectListContainer'
import SettingsMenu from '../settingsSidenav'
import {Link} from 'react-router'


const ProjectListView = () => <div>
  <div className="row">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-10 mainView">
      <Navbar/>
      <div className="col-sm-12">
        <h1>
          Projects <Link to="/settings/project/new" className="badge">New project</Link>
        </h1>
        <ProjectListContainer/>
      </div>
    </div>
  </div>
</div>;


export default ProjectListView;
