import React from 'react';
import Section from '../components/common/Section';
import logo from '../assets/phone-book.svg'

const HomeView = (props) => (
  <Section title="Welcome! Phonebook">
    <img src={logo} alt="img" width="300" />
  </Section>
);

export default HomeView;