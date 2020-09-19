import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../auth/authOperations';
import './RegisterView.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="register-form">
        <h1 className="register-header_description">Register Page</h1>

        <form
          className="origin-form_style-register"
          onSubmit={this.handleSubmit}
        >
          <div className="register-form_style">
            <p className="register-form_description">Name</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
            <p className="register-form_description">Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>

            <p className="register-form_description">Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </div>

          <button className="register-button" type="submit">
            registration
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.registration })(
  RegisterView,
);
