import React from 'react';
import Project from './project';
import {connect} from 'react-redux';
import socketHandler from '../../app/socketHandler';
import actions from './projectActionCreators'
import messageActions from '../../app/messages/messagesActionCreators'
import store from '../../store'
import {browserHistory} from 'react-router'

import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_REQUEST_SUCCESS,
  ADD_PROJECT_REQUEST_FAILURE
} from '../../../../shared/projectActionTypes'


const ProjectContainer = React.createClass({
  componentDidMount() {
    socketHandler.on(ADD_PROJECT_REQUEST_SUCCESS, (response) => {
      store.dispatch(messageActions.showSuccessMessage("Project added successfully!"));
      console.log("project successfully added! ", response);
       browserHistory.goBack();
    });
    socketHandler.on(ADD_PROJECT_REQUEST_FAILURE, (response) => {
      store.dispatch(messageActions.showErrorMessage("Sorry, adding project failed"));
      console.log("project not added:( ", response)
    });
  },

  componentWillUnmount(){
    socketHandler.removeAllListeners(ADD_PROJECT_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(ADD_PROJECT_REQUEST_FAILURE)
  },

  render() {
    return (<Project nameChangeHandler={this.props.nameChangeHandler}
                     shortcutChangeHandler={this.props.shortcutChangeHandler}
                     leaderChangeHandler={this.props.leaderChangeHandler}
                    submitHandler={this.props.submitHandler}
                    isValid={this.props.isValid}
                    />)
  }
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    nameChangeHandler: (event)=> dispatch(actions.projectNameChanged(event.target.value)),
    shortcutChangeHandler: (event)=> dispatch(actions.projectShortcutChanged(event.target.value)),
    leaderChangeHandler: (event)=> dispatch(actions.projectLeaderChanged(event.target.value)),
    submitHandler: (event) => {
      event.preventDefault();
      socketHandler.emit(ADD_PROJECT_REQUEST, store.getState().projectState.get("project"));
    }
  }
};

const mapStateToProps = function (store) {
  return {
    isValid: store.projectState.get("isValid")
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
