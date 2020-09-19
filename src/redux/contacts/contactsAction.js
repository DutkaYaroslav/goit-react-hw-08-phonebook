import { createAction } from '@reduxjs/toolkit';

const addTaskRequest = createAction(
  'contacts/request',
  (nameResult, numberResult) => ({
    name: nameResult,
    number: numberResult,
  }),
);
const addTaskSuccess = createAction('contacts/success');
const addTaskError = createAction('contacts/error');

const getFetchRequest = createAction('contacts/getFetchRequest');
const getFetchSuccess = createAction('contacts/getFetchSuccess');
const getFetchError = createAction('contacts/getFetchError');

const removeContactRequest = createAction('contacts/removeContactRequest');
const removeContactSuccess = createAction('contacts/removeContactSuccess');
const removeContactError = createAction('contacts/removeContactError');

// const removeTask = createAction('contacts/remove');

const nameCheck = createAction('contacts/check');

export default {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,

  getFetchRequest,
  getFetchSuccess,
  getFetchError,

  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  // removeTask,
  nameCheck,
};
