var React = require('react');
// var axios = require('axios');
import UserList from './userList';

var UserListContainer = React.createClass({
  getInitialState() {
    return {
      users: [{id: 1, name: "staszek", email: 'staszek@wp.pl'},
        {id: 2, name: "daszek", email: 'daszEk@o21.pl'}]
    }
  },

  componentDidMount() {
    // var _this = this;
    // axios.get('/path/to/user-api').then(function(response) {
    //   _this.setState({users: response.data})
    // });
  },

  render() {
    return (<UserList users={this.state.users}/>);
  }
});

export default UserListContainer;
