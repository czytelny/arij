import React from 'react';

const ProjectShortcutInput = ({shortcutChangeHandler}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="projectName">Project shortcut</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-child" aria-hidden="true"/>
        </div>
        <input onBlur={shortcutChangeHandler} type="text" className="form-control" id="projectName" placeholder="Project shortcut"/>
      </div>
    </div>
  </div>;

export default ProjectShortcutInput;

