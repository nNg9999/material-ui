import React, { Component } from 'react'

import { connect } from "react-redux";
import { contactsSelectors, contactsOperation } from '../redux/contacts';
import { authOperations } from '../redux/auth';

import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <App {...this.props} {...this.state} >
        {this.props.children}
      </App>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  visibleContacts: contactsSelectors.getVC(state),
  isLoadingContacts: state.contacts.loading,
})

const mapDispatchToprops = {
  onFetchContacts: contactsOperation.fetchContacts,
  onTheme: contactsOperation.themeConfig,
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToprops)(AppContainer);



