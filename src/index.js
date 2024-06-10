import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Assuming you have some global CSS here

// Create a root element

import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router><App /></Router>
,document.getElementById('root')
);