import React from 'react';

import ProjectNameInput from './projectNameInput';
import ProjectShortcutInput from './projectShortcutInput';
import ProjectLeaderInput from './projectLeaderInput';
import ActionButtons from './actionButtons';

const project = ({
  nameChangeHandler, shortcutChangeHandler, leaderChangeHandler,
  submitHandler, isValid
}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewProjectForm" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Add new project</h1>
          </div>
        </div>
        <div className="form-group">
          <ProjectNameInput nameChangeHandler={nameChangeHandler}/>
          <ProjectShortcutInput shortcutChangeHandler={shortcutChangeHandler}/>
          <ProjectLeaderInput leaderChangeHandler={leaderChangeHandler}/>
        </div>
        <div className="form-group">
          <ActionButtons/>
        </div>
      </form>
    </div>
  </div>;

export default project;
