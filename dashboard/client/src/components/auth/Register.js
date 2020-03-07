import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "./Auth.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="base-wrapper">
        <div className="auth-header">SmartHealth Registration</div>
        <form className="auth-form" noValidate onSubmit={this.onSubmit}>
          <div className="auth-group">
            <div className="auth-label">First Name</div>
            <input
              onChange={this.onChange}
              value={this.state.firstname}
              error={errors.firstname}
              id="firstname"
              type="text"
              className="auth-input"
            />
            <div className="auth-error">{errors.firstname}</div>
          </div>

          <div className="auth-group">
            <div className="auth-label">Last Name</div>
            <input
              onChange={this.onChange}
              value={this.state.lastname}
              error={errors.lastname}
              id="lastname"
              type="email"
              className="auth-input"
            />
            <div className="auth-error">{errors.lastname}</div>
          </div>

          <div className="auth-group">
            <div className="auth-label">Email address</div>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className="auth-input"
            />
            <div className="auth-error">{errors.email}</div>
          </div>

          <div className="auth-group">
            <div className="auth-label">Password</div>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className="auth-input"
            />
            <div className="auth-error">{errors.password}</div>
          </div>

          <div>
            <button type="submit" className="auth-button">
              Sign up
            </button>
          </div>
          <div className="bottom-group">
            <p>Already have an account? <Link to="/" className="link">
              Sign in
            </Link> </p>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
