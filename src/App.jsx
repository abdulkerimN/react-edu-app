import React from 'react'
import './App.css'
import Header from './components/navigation/Header.jsx'  
import Home from './components/home/Home.jsx'
import Title from './components/common/title/Title.jsx'
import About from './components/about/About.jsx'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/title"
            element={<Title subtitle="Hello" title="Welcome" />} />
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
