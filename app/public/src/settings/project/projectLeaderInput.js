import React from 'react';

const ProjectLeaderInput = ({leaderChangeHandler}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="projectLeader">Project leader</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-child" aria-hidden="true"/>
        </div>
        <input onBlur={leaderChangeHandler} type="text" className="form-control" id="projectLeader" placeholder="Project leader" />
      </div>
    </div>
  </div>;

export default ProjectLeaderInput;

