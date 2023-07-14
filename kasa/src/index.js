import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

