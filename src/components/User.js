import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';

class User extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <div className="d-flex justify-content-between mt-3">
          <h3>{user.username}</h3>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modal"
          >
            Add project
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(User);
