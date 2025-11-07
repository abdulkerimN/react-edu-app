import React from 'react'
import './App.css'
import Header from './components/navigation/Header.jsx'  
import Hero from './components/home/hero/Hero.jsx'
import Title from './components/common/title/Title.jsx'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/title"
            element={<Title subtitle="Hello" title="Welcome" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
