import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  state = {
    name: "",
    age: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      age: this.state.age,
    };

    // Add User
    await axios.post("/users", user);

    // Redirect
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <div className="row mb-5">
          <div className="col-6">
            <h1>Add User</h1>
          </div>
          <div className="col-6">
            <Link to="/users" className="btn btn-primary float-right mt-2">
              Back
            </Link>
          </div>
        </div>

        <form className="w-50" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.onChange}
              required
            />
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-success mt-2"
          />
        </form>
      </div>
    );
  }
}

export default AddUser;
