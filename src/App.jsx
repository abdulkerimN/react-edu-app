import React from 'react'
import './App.css'
import Header from './components/navigation/Header.jsx'  
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
        </div>
    );
}
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
