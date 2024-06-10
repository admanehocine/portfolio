import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
      <div>
        <Navbar />
        <hr className='xl:px-28' />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other components if needed */}
        </Routes>
      </div>
  );
}

export default App;
