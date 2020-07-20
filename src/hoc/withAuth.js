import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { withRouter } from 'react-router-dom';


const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return withRouter(connect(mapStateToProps)(WithAuth));
};

export default withAuth;
