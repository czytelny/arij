import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import socketHandler from '../../app/socketHandler';
import actions from './userActions'
import store from '../../store'

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

  render() {
    return (<User nameChangeHandler={this.props.nameChangeHandler}
                  emailChangeHandler={this.props.emailChangeHandler}
                  passwordChangeHandler={this.props.passwordChangeHandler}
                  passwordConfirmChangeHandler={this.props.passwordConfirmChangeHandler}
                  submitHandler={this.props.submitHandler}
                  isValid={this.props.isValid}
    />)
  }
});

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    nameChangeHandler: (event)=> dispatch(actions.userNameChanged(event.target.value)),
    emailChangeHandler: (event)=> dispatch(actions.userEmailChanged(event.target.value)),
    passwordChangeHandler: (event) => dispatch(actions.userPasswordChanged(event.target.value)),
    passwordConfirmChangeHandler: (event) => dispatch(actions.userPasswordConfirmChanged(event.target.value)),
    submitHandler: (event) => {
      event.preventDefault();
      socketHandler.emit(ADD_USER_REQUEST, store.getState().userState.get("user"));
    }
  }
};

const mapStateToProps = function (store) {
  return {
    isValid: store.userState.get("isValid")
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
