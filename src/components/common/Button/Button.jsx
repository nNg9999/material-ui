import React from 'react';
import { connect } from 'react-redux';

import { themeActions } from "../../../../redux/theme";

import css from './Button.module.css'

const Button = ({ label, isChecked, isOpen, onClick, type }) => {
  const button = `${css.button} ${
    isChecked ? css.button_dark : css.button_light
    }`

  return (
    <button
      type={type}
      className={button}
      onClick={onClick}>

      {label}
    </button>
  );
}

const mapStateToProps = (state) => ({
  isChecked: themeActions.toggleTheme,
})

export default connect(mapStateToProps)(Button);
