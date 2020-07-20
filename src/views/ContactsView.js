import React, { Component } from 'react';
import { connect } from 'react-redux';

import { contactsSelectors, contactsOperation } from '../redux/contacts'

// Components
import Section from '../components/common/Section';
import ContactForm from '../components/ContactForm/ContactFormContainer.js';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Modal from '../components/common/Modal';

// utils
import { ToastContainer } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';


class TaskerView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, isLoadingContacts, visibleContacts } = this.props;

    return (
      <>
        {isLoadingContacts && <Modal />}
        <Section title={"Phonebook"}>
          <ContactForm />
        </Section>
        <Section title={"Contacts"}>
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 && < ContactList />}
          {!visibleContacts.length && <div>Not faund</div>}
        </Section>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  visibleContacts: contactsSelectors.getVC(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskerView);
