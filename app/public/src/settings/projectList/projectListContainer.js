import React from 'react';
import { connect } from 'react-redux';
import store from '../../store'
import ProjectList from './projectList';
import socketHandler from '../../socketHandler';
import actions from './projectListActions'

import {
  GET_ALL_PROJECT_REQUEST,
  GET_ALL_PROJECT_REQUEST_SUCCESS
} from '../../../../shared/projectActionTypes'


const ProjectListContainer = React.createClass({
  componentDidMount() {
    socketHandler.emit(GET_ALL_PROJECT_REQUEST);
    socketHandler.on(GET_ALL_PROJECT_REQUEST_SUCCESS, this._getAllProjectRequestHandler);
  },

  componentWillUnmount() {
    socketHandler.removeListener(GET_ALL_PROJECT_REQUEST_SUCCESS, this._getAllProjectRequestHandler);
  },

  _getAllProjectRequestHandler(response) {
    store.dispatch(actions.getAllProjectRequestSuccess(response));
  },

  render() {
    return (<ProjectList projects={this.props.projects}/>);
  }
});

const mapStateToProps = function (store) {
  return {
    projects: store.projectListState.get('projects')
  };
};

export default connect(mapStateToProps)(ProjectListContainer);
