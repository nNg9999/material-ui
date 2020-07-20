import { createAction } from '@reduxjs/toolkit';

const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/addSuccess');
const addContactsError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');


const removeContactsRequest = createAction('contacts/removeRequest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');


const changeFilter = createAction('contacts/changeFilter');


const themeRequest = createAction('theme/themeRequest');
const themeSuccess = createAction('theme/themeSuccess');
const themeError = createAction('theme/themeError');


export default {

  addContactsRequest,
  addContactsSuccess,
  addContactsError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,

  themeRequest,
  themeSuccess,
  themeError,

  changeFilter,
}