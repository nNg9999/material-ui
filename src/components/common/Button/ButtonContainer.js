// redux
import React, { Component } from 'react'

import { connect } from "react-redux";

import Button from "./Button";

class ButtonContainer extends Component {

  render() {
    const button = `${css.button} ${
      isChecked ? css.button_dark : css.button_light
      }`

    return (
      <Button
      // className={button}
      // onClick={onToggle}
      >
        {/* {isOpen ? `Hide${label}` : `Show${label}`} */}
      </Button>
    )
  }
}

// const mapStateToProps = (state) => ({
//   isChecked: themeActions.toggleTheme,
// })

// export default connect(mapStateToProps)(ButtonContainer);


