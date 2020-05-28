import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import Navbar from './navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
