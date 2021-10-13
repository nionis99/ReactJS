import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from 'containers/ErrorBoundary';
import MoviesPage from 'pages/Movies';
import store from 'store';
import 'styles/main.css';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <MoviesPage />
    </ErrorBoundary>
  </Provider>
);

export default App;
