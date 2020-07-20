import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { themeSelector } from "../../../redux/theme";

import styles from './AuthNav.module.scss'
import ThemeToggler from '../../ThemeToggler';


const AuthNav = ({ isChecked }) => {

  const color = `${styles.link} ${
    isChecked.isChecked ? styles.linkdark : styles.linklight
    }`

  return (
    <div className={styles.container}>
      <ThemeToggler />
      <NavLink
        to="/register"
        exact
        className={color}
        activeClassName={styles.activeLink}
      >
        Register
    </NavLink>
      <NavLink
        to="/login"
        exact
        className={color}
        activeClassName={styles.activeLink}
      >
        Login
    </NavLink>
    </div>
  );

}
const mapStateToProps = (state) => ({
  isChecked: themeSelector.getIsChecked(state),
})

export default connect(mapStateToProps)(AuthNav);

