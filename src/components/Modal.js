import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addProject,
  dismissProjectError,
  dismissProjectSuccess
} from '../actions/projectActions';

class Modal extends Component {
  state = {
    name: '',
    inputErrors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    if (name === '') {
      this.setState({ inputErrors: { name: 'Project name is required' } });
      return;
    }

    const project = {
      name
    };

    this.props.addProject(project);

    this.setState({
      name: '',
      inputErrors: {}
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onDismissError = () => {
    this.props.dismissProjectError();
  };
  onDismissSuccess = () => {
    this.props.dismissProjectSuccess();
  };

  render() {
    const { project, projectError } = this.props;
    const { inputErrors } = this.state;

    return (
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add new project...</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Enter name</label>
                  <input
                    type="input"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={this.onChange}
                    placeholder="Name"
                  />
                  {inputErrors && (
                    <div className="form-group text-danger">
                      {inputErrors.name}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  {projectError === null ? null : (
                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      Error status code: <strong>{projectError.status}</strong>
                      {projectError.message}
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={() => this.onDismissError()}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  {project === null ? null : (
                    <div className="alert alert-success alert-dismissible fade show">
                      Project <strong>{project.name}</strong> created
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={() => this.onDismissSuccess()}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                </div>
                <input
                  value="Submit"
                  type="submit"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project.projects,
  projectError: state.project.projectError
});

export default connect(
  mapStateToProps,
  { addProject, dismissProjectError, dismissProjectSuccess }
)(Modal);
