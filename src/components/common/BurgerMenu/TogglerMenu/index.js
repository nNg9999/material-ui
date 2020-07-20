
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';

export default class TogglerMenu extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <MenuIcon />
      </div>
    )
  }
}
