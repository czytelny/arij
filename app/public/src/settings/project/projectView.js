var React = require('react');

import Header from '../../app/navbar'
import ProjectContainer from './projectContainer'
import SettingsMenu from '../settingsMenu'
import MessagesComponent from '../../app/messages/messagesComponent'

const ProjectView = () =>  <div>
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
        <ProjectContainer/>
      </div>
    </div>
  </div>
</div>;


export default ProjectView;
