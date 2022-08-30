import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {
  onClick = () => {
    this.props.onDelete(this.props.val.id);
  };

  render() {
    const { id, name, age } = this.props.val;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h4>Name: {name}</h4>
              <p className="mb-0">Age: {age}</p>
            </div>
            <div className="col-2">
              <i
                className="fas fa-trash-alt text-danger float-right ml-2"
                style={point}
                onClick={this.onClick}
              ></i>
              <Link to={`/users/edit/${id}`}>
                <i className="fas fa-pencil-alt float-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const point = {
  cursor: 'pointer',
};

export default UserItem;
