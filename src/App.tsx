import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'containers/ErrorBoundary';
import Routes from './routes';
import 'styles/main.css';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes />
    </Router>
  </ErrorBoundary>
);

export default App;
