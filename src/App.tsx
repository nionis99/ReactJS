import React from 'react';
import ErrorBoundary from './containers/ErrorBoundary';
import SearchHeader from './layout/SearchHeader';
import Content from './layout/Content';
import Footer from './layout/Footer';
import './styles/main.css';

const App = () => (
  <ErrorBoundary>
    <SearchHeader>Test</SearchHeader>
    <div className="w-full h-2.5" />
    <Content />
    <Footer />
  </ErrorBoundary>
);

export default App;
