import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
// import { CSSTransition } from 'react-transition-group';
import './App.css';
import contactsOperation from './redux/contacts/contactsOperation';
import contactsSelectors from './redux/contacts/contactsSelectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        <ContactForm />
        <h2 className="contacts-styles">Contacts</h2>

        <ContactsList />
        {this.props.isLoadingTasks && <h1 className="loading">Loading</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTasks: contactsSelectors.getLoadingTasks(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
