import React from 'react';
import ErrorBoundary from 'containers/ErrorBoundary';
import MoviesPage from 'pages/Movies';
import 'styles/main.css';

const App = () => (
  <ErrorBoundary>
    <MoviesPage />
  </ErrorBoundary>
);

export default App;
