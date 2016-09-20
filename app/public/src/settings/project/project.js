import React from 'react';

import ActionButtons from './actionButtons'

const project = ({
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
        </div>
        <div className="form-group">
          <ActionButtons isValid={isValid}/>
        </div>
      </form>
    </div>
  </div>;

export default project;
