import React from 'react';

import Header from '../../app/header'
import ProjectListContainer from './projectListContainer'
import SettingsMenu from '../settingsMenu'
import {Link} from 'react-router'
import MessagesComponent from '../../app/messages/messagesComponent'


const ProjectListView = () => <div>
  <div className="row">
    <Header/>
    <MessagesComponent />
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
