import React from 'react';

import ProjectListHeader from './projectListHeader';
import ProjectListRows from './projectListRows';

const ProjectList = (props) =>
  <div className="table-responsive">
    <table className="table table-hover">
      <ProjectListHeader/>
      <ProjectListRows projects={props.projects}/>
    </table>
  </div>

export default ProjectList;
