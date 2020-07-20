import React, { Component } from 'react';

import Spinner from '../../common/Loader';

import css from './Modal.module.css';

export default class Modal extends Component {

  render() {

    return (
      <div className={css.Overlay} onClick={this.handelClick}>
        <div className={css.Modal}>
          <Spinner />
        </div>
      </div>
    );
  }
}
