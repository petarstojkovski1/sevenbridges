import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTask } from '../actions/taskActions';

class Tasks extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTask(id);
  }

  render() {
    const { task } = this.props;
    return (
      <div className="mt-3">
        <Link to="/">
          <h4>&larr; BACK</h4>
        </Link>

        <p className="mt-3 h3">
          <span
            className="text-success h6 px-2 rounded-pill mr-1"
            style={{ backgroundColor: '#dafbf3' }}
          >
            {task.status}
          </span>
          {task.name}
        </p>

        <p>
          Project: <span className="text-primary">{task.project}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task.task
});

export default connect(
  mapStateToProps,
  { getTask }
)(Tasks);
