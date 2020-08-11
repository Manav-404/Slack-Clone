import React from 'react';

import './App.css';
import Header from './core/Header';
import Sidebar from './core/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      <div className="app__body">
        <Sidebar />
      {/* SideBar */}
      {/* React Router */}


      </div>
    </div>
  );
}

export default App;
