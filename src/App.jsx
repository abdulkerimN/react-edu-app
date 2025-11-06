import React from 'react'
import './App.css'
import Header from './components/navigation/Header.jsx'  
import Hero from './components/home/hero/Hero.jsx'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
