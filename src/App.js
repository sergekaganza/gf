import React from 'react';
import './App.css';

import Header from './components/Header';
import Aboutme from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-header">
      <Header/>
      </div>
      
      <div className='About'>
        <Aboutme/>
      </div>
      <div className='work'>
        <Work/>
      </div>
      <div className='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
