import Main from './components/Main/Main.js'
import VerticalNav from './components/VerticalNav/VerticalNav.js'
import HorizontalNav from './components/HorizontalNav/HorizontalNav.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  return (
    <div className="App">
    <HorizontalNav />
    <div className='main-vertical-parent'>
      <VerticalNav />
      <Main />
    </div>
    </div>
  );
}

export default App;
