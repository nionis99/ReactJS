import React from 'react';
import './styles/main.css';

const App = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-black font-bold rounded-lg border shadow-lg p-10 m-20">
      <div>
        <span className="flex justify-center text-sm">Welcome</span>
        <span className="text-green-500 text-xs mt-20">This is {process.env.NODE_ENV} environment</span>
      </div>
    </div>
  </div>
);

export default App;
