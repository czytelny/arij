var React = require('react');
// var axios = require('axios');
import UserList from './userList';
import socketHandler from './../../app/socketHandler';


var UserListContainer = React.createClass({
  getInitialState() {
    return {
      users: []
    }
  },

  componentDidMount() {
    socketHandler.emit("GET_ALL_USER_REQUEST");
    socketHandler.on("GET_ALL_USER_REQUEST_SUCCESS", (response) => {
      this.setState({users: response});
    });
  },

  render() {
    return (<UserList users={this.state.users}/>);
  }
});

export default UserListContainer;
