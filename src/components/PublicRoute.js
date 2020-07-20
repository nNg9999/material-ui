import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import withAuth from "../hoc/withAuth";
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /tasks
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
            <Component {...props} />
          )
      }
    />
  );

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
// export default PublicRoute