var React = require('react');

import Navbar from '../../app/navbar/navbar'
import ProjectContainer from './projectContainer'
import Logo from './../../app/logo'


const ProjectView = () =>  <div>
  <div className="row ">
    <div className="col-sm-2">
      <Logo/>
    </div>
    <div className="col-sm-10 mainView">
      <Navbar/>
      <div className="col-sm-12">
        <ProjectContainer/>
      </div>
    </div>
  </div>
</div>;


export default ProjectView;
