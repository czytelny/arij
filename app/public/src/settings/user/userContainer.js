import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import socketHandler from '../../app/socketHandler';
import actions from './userActions'

import {
  ADD_USER_REQUEST,
  ADD_USER_REQUEST_SUCCESS,
  ADD_USER_REQUEST_FAILURE
} from '../../../../shared/userActionTypes'


const UserContainer = React.createClass({
  componentDidMount() {
    socketHandler.on(ADD_USER_REQUEST_SUCCESS, (response) =>
      console.log("user successfully added! " + JSON.stringify(response)));
    socketHandler.on(ADD_USER_REQUEST_FAILURE, (response) =>
      console.log("user not added:( " + JSON.stringify(response)));
  },

  componentWillUnmount(){
    socketHandler.removeAllListeners(ADD_USER_REQUEST_SUCCESS);
    socketHandler.removeAllListeners(ADD_USER_REQUEST_FAILURE)
  },

  _handleSubmit(e) {
    e.preventDefault();
    socketHandler.emit(ADD_USER_REQUEST, this.state);
  },


  render() {
    return (<User submitHandler={this._handleSubmit}/>)
  }
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    nameChangeHandler: (name)=> dispatch(action),
    emailChangeHandler: (email)=> dispatch(actions.userEmailChanged(email)),
    passwordChangeHandler: (password) => dispatch(actions.userPasswordChanged(password))
  }
};

export default connect(null, mapDispatchToProps)(User);
