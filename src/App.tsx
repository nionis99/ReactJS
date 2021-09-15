import React from 'react';
import SearchHeader from './components/Layout/SearchHeader';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import './styles/main.css';

const App = () => (
  <>
    <SearchHeader>Test</SearchHeader>
    <div className="w-full h-2.5" />
    <Content />
    <Footer />
  </>
);

export default App;
