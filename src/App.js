import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <hr className='xl:px-28' />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other components if needed */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
