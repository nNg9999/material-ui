import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import Spinner from './common/Loader';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ErrorBoundary from "./ErrorBoundary.js";


export default function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<><Spinner /></>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
              )}
            </Switch>
          </Suspense>

        </Layout>

      </ErrorBoundary>

    </BrowserRouter>
  );
}

