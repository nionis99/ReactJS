import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundaryView from 'components/ErrorBoundaryView';
import MoviesPage from 'pages/Movies';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/search" />
    </Route>
    <Route path="/search/:searchValue?">
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
