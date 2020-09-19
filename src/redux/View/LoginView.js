import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../auth/authOperations';
import './LoginView.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-form">
        <h1 className="login-header_description">Login Page</h1>

        <form className="origin-form-style" onSubmit={this.handleSubmit}>
          <div className="login-form_style">
            <p className="login-form_description">name</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
            <p className="login-form_description">password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
