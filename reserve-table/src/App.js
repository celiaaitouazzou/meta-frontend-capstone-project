import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import Footer from'./Footer.js'
import React from 'react';
import AppRoutes from './AppRoutes.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer/>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
