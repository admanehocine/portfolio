import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { Navbar } from './components/Navbar';
import Accueil from './pages/Accueil'; // Import the Accueil component
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <hr className='xl:px-28' />
      <Routes>
        <Route path="/" element={<Accueil />} />
        {/* Add more routes for other components if needed */}
      </Routes>
    </div>
  );
}

export default App;
