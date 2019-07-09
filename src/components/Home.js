import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from './Tasks';
import {
  getTasks,
  getTasksLimit,
  getTasksStatus,
  getTasksLimitStatus
} from '../actions/taskActions';

class Home extends Component {
  state = {
    limit: null,
    status: null
  };

  componentDidMount() {
    this.props.getTasks();
  }

  onLimitChange = limit => {
    this.props.getTasksLimit(limit);
  };

  onFilterClick = () => {
    const { limit, status } = this.state;

    if (limit !== null && status === null) {
      this.props.getTasksLimit(limit);
    } else if (limit === null && status !== null) {
      this.props.getTasksStatus(status);
    } else {
      this.props.getTasksLimitStatus(limit, status);
    }
  };

  onClearClick = () => {
    this.setState({ limit: null });
    this.setState({ status: null });
    this.props.getTasks();
  };

  render() {
    const { tasks, errors } = this.props;

    return (
      <>
        <div className="form-group w-25">
          <label htmlFor="limit">Limit results</label>
          <select
            className="form-control"
            id="limit"
            onChange={e => this.setState({ limit: e.target.value })}
          >
            <option hidden selected={this.state.limit === null ? true : false}>
              Choose...
            </option>
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
          <label htmlFor="status">Status results</label>
          <select
            className="form-control"
            id="status"
            onChange={e => this.setState({ status: e.target.value })}
          >
            <option hidden selected={this.state.status === null ? true : false}>
              Choose...
            </option>
            <option>QUEUED</option>
            <option>DRAFT</option>
            <option>RUNNING</option>
            <option>COMPLETED</option>
            <option>ABORTED</option>
            <option>FAILED</option>
          </select>
          <div className="mt-3">
            <button
              className="btn btn-danger mr-3"
              onClick={() => this.onClearClick()}
            >
              Clear
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.onFilterClick()}
            >
              Filter
            </button>
          </div>
        </div>

        <Tasks tasks={tasks} errors={errors} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks.items,
  errors: state.task.errors
});

export default connect(
  mapStateToProps,
  { getTasks, getTasksLimit, getTasksStatus, getTasksLimitStatus }
)(Home);
