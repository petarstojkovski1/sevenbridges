import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, dismissError } from '../actions/taskActions';
import { Link } from 'react-router-dom';

class Tasks extends Component {
  onDeleteClick = id => {
    this.props.deleteTask(id);
  };

  onDismiss = () => {
    this.props.dismissError();
  };

  render() {
    const { tasks, errors } = this.props;
    if (tasks === undefined) {
      return 'Fetching...';
    } else if (tasks.length === 0) {
      return 'There are no items in list.';
    } else {
      return (
        <div className="row mt-3">
          {errors === null ? null : (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Error status code: <strong>{errors.status}</strong>{' '}
              {errors.message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => this.onDismiss()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>
                    <Link to={`/task/${task.id}`}>{task.name}</Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.onDeleteClick(task.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { deleteTask, dismissError }
)(Tasks);
