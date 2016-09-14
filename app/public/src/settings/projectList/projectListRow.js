import React from 'react';


const ProjectListRow = ({project}) =>
  <tr>
    <td>
      {project._id}
    </td>
    <td>
      {project.name}
    </td>
    <td>
      {project.shortcut}
    </td>
    <td>
      {project.leader}
    </td>
  </tr>;

export default ProjectListRow;
