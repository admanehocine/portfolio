import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Assuming you have some global CSS here

// Create a root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app
root.render(<App />);
