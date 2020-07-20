import React, { Component } from 'react';

import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import Section from '../common/Section';

import styles from './RegisterForm.module.css';

class RegisterForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Section title="Register page">
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit"
            className={styles.button}
            onClick={this.props.onRegister}>
            Register
          </button>
        </form>
      </Section>
    )
  }
}

export default connect(null, { onRegister: authOperations.register })(RegisterForm);