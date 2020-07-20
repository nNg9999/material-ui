import React from 'react';
import { string, func } from 'prop-types';

// styles
import styles from '../ContactList/ContactList.module.scss';

const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li className={styles.ContactList_Item}>
      <span className={styles.ContactList_Text}>{name}: {number}</span>
      <section >
        <button type="submit" className={styles.button} onClick={onRemove}>Delete</button>
      </section>
    </li>
  )
};

ContactListItem.defaultProps = {};

ContactListItem.propTypes = {
  name: string.isRequired,
  number: string.isRequired,
  onRemove: func.isRequired,
};

export default ContactListItem;