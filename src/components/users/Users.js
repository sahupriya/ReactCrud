import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: null,
  };

  async componentDidMount() {
    const response = await axios.get('/users');

    this.setState({ users: response.data });
  }

  onDelete = async (userId) => {
    // delete user
    await axios.delete(`/users/${userId}`);

    let copyUsers = this.state.users;
    copyUsers = copyUsers.filter((val, i) => val.id !== userId);
    this.setState({ users: copyUsers });
  };

  render() {
    return (
      <Fragment>
        <div className="row mb-3">
          <div className="col-6">
            <h1>Users</h1>
          </div>
          <div className="col-6">
            <Link to="/users/add" className="btn btn-primary float-right mt-2">
              Add User
            </Link>
          </div>
        </div>

        {this.state.users !== null && this.state.users.length > 0 ? (
          this.state.users.map((val) => (
            <UserItem key={val.id} val={val} onDelete={this.onDelete} />
          ))
        ) : (
          <p>No users found</p>
        )}
      </Fragment>
    );
  }
}

export default Users;
