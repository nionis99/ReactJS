import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundaryView from 'components/ErrorBoundaryView';
import MoviesPage from 'pages/Movies';
import { ROUTES } from 'utils/Constants';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={ROUTES.search} />
    </Route>
    <Route path={`${ROUTES.search}/:searchValue?`}>
      <MoviesPage />
    </Route>
    <Route path="/404">
      <ErrorBoundaryView title="Page not found" />
    </Route>
    <Route path="/*">
      <Redirect to="/404" />
    </Route>
  </Switch>
);

export default Routes;
