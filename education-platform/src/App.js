import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header/>} />
          <Route path="/home" element={<HomeContent/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/aboutus" element={<Footer/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
