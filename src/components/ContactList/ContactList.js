import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';
import contactsOperation from '../../redux/contacts/contactsOperation';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

import './ContactList.css';

const Contacts = ({ value, onChange, onVisible, onRemove }) => (
  <div className="find-input">
    <label>
      Find contacts by name
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        name="filter"
      ></input>
    </label>
    <TransitionGroup component="ul">
      {onVisible.map(visibleTask => (
        <CSSTransition key={visibleTask.id} classNames="list" timeout={250}>
          <li className="name-list">
            {visibleTask.name}:{visibleTask.number}
            <button
              type="button"
              className="close-button"
              onClick={() => onRemove(visibleTask.id)}
            >
              delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mapStateToProps = state => ({
  onVisible: contactsSelectors.getVisible(state),
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onRemove: contactsOperation.removeContact,
  onChange: contactsAction.nameCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
