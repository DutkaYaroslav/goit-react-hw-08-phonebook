import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';
import './ContactForm.css';
import contactsOperation from '../../redux/contacts/contactsOperation';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onAddTask(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.onSubmit}>
          <div className="contact-form_style">
            <p className="contact-form_description">Name</p>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              className="contact-form_label"
            ></input>
            <p className="contact-form_description">Number</p>
            <input
              onChange={this.handleChange}
              value={this.state.number}
              name="number"
            ></input>
          </div>

          <button type="submit" className="contact-form_button">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: contactsOperation.addTask,
  handleChange: contactsAction.nameCheck,
};
export default connect(null, mapDispatchToProps)(ContactForm);
