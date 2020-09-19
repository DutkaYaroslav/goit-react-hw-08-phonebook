import contactsAction from './contactsAction';
import axios from 'axios';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // unset(token) {
  //   axios.defaults.headers.common.Authorization = '';
  // },
};

const addTask = (name, number) => (disPatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  disPatch(contactsAction.addTaskRequest());
  axios
    .post('/contacts', {
      name,
      number,
    })
    .then(response => {
      // token.set(response.data.token);
      disPatch(contactsAction.addTaskSuccess(response.data));
    })
    .catch(error => disPatch(contactsAction.addTaskError(error)));
};

const fetchContacts = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(contactsAction.getFetchRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(contactsAction.getFetchSuccess(data));
    })
    .catch(error => dispatch(contactsAction.getFetchError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsAction.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactsAction.removeContactError(error)));
};

export default {
  addTask,
  fetchContacts,
  removeContact,
};
