import React from 'react';
import { string, func } from 'prop-types';

import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";


import styles from '../Filter/Filter.module.scss';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.filter} >Find contacts by name
    <input
      type="text"
      name="filter"
      className={styles.input}
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)} />
  </label>
)

Filter.defaultProps = {};

Filter.propTypes = {
  value: string.isRequired,
  onChangeFilter: func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);