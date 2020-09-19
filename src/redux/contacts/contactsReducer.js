import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contactsAction';
// import contactsOperation from './contactsOperation';

const contactsTools = createReducer([], {
  [contactsAction.addTaskSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsAction.getFetchSuccess]: (state, action) => action.payload,
  [contactsAction.removeContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [contactsAction.addTaskRequest]: () => true,
  [contactsAction.addTaskSuccess]: () => false,
  [contactsAction.addTaskError]: () => false,
});

const filterTools = createReducer('', {
  [contactsAction.nameCheck]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: contactsTools,
  filter: filterTools,
  loading: loading,
});
