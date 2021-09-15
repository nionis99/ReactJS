import React from 'react';
import ErrorBoundary from './components/Error/ErrorBoundary';
import SearchHeader from './components/Layout/SearchHeader';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
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
