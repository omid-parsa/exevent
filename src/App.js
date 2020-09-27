import React from 'react';
// import logo from './logo.svg';
import './App.css';

//COMPONENTS
import Header from './components/header/header.component';
import MainContent from './components/main-content/main-content.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
