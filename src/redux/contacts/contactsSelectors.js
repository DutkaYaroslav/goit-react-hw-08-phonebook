import { createSelector } from '@reduxjs/toolkit';

const getLoadingTasks = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.contacts;

const getVisible = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(task => task.name.toLowerCase().includes(filter));
  },
);
// const getVisible = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state).toLowerCase();

//   return contacts.filter(task => task.name.toLowerCase().includes(filter));
// };

export default {
  getLoadingTasks,
  getFilter,
  getVisible,
};
