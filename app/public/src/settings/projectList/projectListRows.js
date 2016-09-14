import React from 'react';

import ProjectListRow from './projectListRow'

const ProjectListRows = ({projects}) =>
    <tbody>
    {projects.map(function (project) {
      return (
        <ProjectListRow key={project._id} project={project}/>
      );
    })}
    </tbody>;



export default ProjectListRows;
