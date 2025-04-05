// src/App.js
import React from 'react';
import Sidebar from './components/Navbar/Sidebar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import './App.css';
import 'typeface-pt-serif';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edu' element={<Education />} />
          <Route path='/skill' element={<Skills />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/certificate' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   <Sidebar />
//   <Home />
//   <Education />
//   <Skills />
//   <Projects />
//   <Certificates />
//   <Contact />
// </div>