import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'containers/ErrorBoundary';
import Routes from './routes';
import store from './store';
import 'styles/main.css';

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ErrorBoundary>
);

export default App;
