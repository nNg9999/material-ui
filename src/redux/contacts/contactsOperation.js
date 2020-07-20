import axios from 'axios';
import contactsActions from "./contactsActions";


const addContacts = (name, number) => dispatch => {
  dispatch(contactsActions.addContactsRequest()); // loading

  axios.post('/contacts', { name, number })
    .then(res => dispatch(contactsActions.addContactsSuccess(res.data)))
    .catch(error => dispatch(contactsActions.addContactsError(error)));
};


const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest()); // loading

  axios.get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));

}

const removeContact = (id) => dispatch => {
  dispatch(contactsActions.removeContactsRequest()); // loading

  axios.delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactsError(error)));
}


const themeConfig = () => dispatch => {
  dispatch(contactsActions.themeRequest()); // loading

  axios.patch(`/theme`, { isChecked: true })
    .then(({ data }) => dispatch(contactsActions.themeSuccess(data)))
    .catch(error => dispatch(contactsActions.themeError(error)));
}

export default {
  addContacts,
  fetchContacts,
  removeContact,
  themeConfig,
}