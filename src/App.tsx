import React from 'react';
import { MoviePageProvider } from 'contexts/MoviePageProvider';
import ErrorBoundary from 'containers/ErrorBoundary';
import MoviesPage from 'pages/Movies';
import 'styles/main.css';

const App = () => (
  <ErrorBoundary>
    <MoviePageProvider>
      <MoviesPage />
    </MoviePageProvider>
  </ErrorBoundary>
);

export default App;
