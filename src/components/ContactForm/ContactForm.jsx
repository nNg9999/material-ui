import React, { Component } from 'react';
import { func } from 'prop-types';

import { connect } from 'react-redux';
import { contactsSelectors } from "../../redux/contacts";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {

  static propTypes = {
    onAddContact: func.isRequired,
  };
  static defaulProps = {};

  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (!name || !number) { return toast.error('Please fill the form!') }
    else if (name.length < 3) { toast.error('Name should be more then 3 letters') }
    else if (contacts.some(contact => contact.name === name)) { toast.info(name + ` is alredy in contacts`) }
    else { this.props.onAddContact(name, number); }

    this.setState({ name: '', number: '' });
  }
  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange} />
        </label>
        <label className={styles.label}>Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange} />
        </label>
        <button
          type="submit"
          className={styles.button} >Add contact</button>
      </form>
    );
  }
}

const mapState = (state) => {
  const contacts = contactsSelectors.getItems(state);
  return { contacts }
}

export default connect(mapState, null)(ContactForm);


