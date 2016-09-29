import React from 'react';

import Header from '../../app/navbar/navbar'
import ProjectListContainer from './projectListContainer'
import SettingsMenu from '../settingsMenu'
import {Link} from 'react-router'


const ProjectListView = () => <div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-9 mainView">
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
