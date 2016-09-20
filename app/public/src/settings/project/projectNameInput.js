import React from 'react';

const ProjectNameInput = ({nameChangeHandler}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="projectName">Project name</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-child" aria-hidden="true"/>
        </div>
        <input onBlur={nameChangeHandler} type="text" className="form-control" id="projectName" placeholder="Project name"/>
      </div>
    </div>
  </div>;

export default ProjectNameInput;

