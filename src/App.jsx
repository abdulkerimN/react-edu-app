import React from 'react'
import './App.css'
import Header from './components/navigation/Header.jsx'  
import Home from './components/home/Home.jsx'
import Title from './components/common/title/Title.jsx'
import About from './components/about/About.jsx'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import CourseHome from './components/allcourses/CourseHome.jsx'
import Team from './components/team/Team.jsx'
import Price from './components/pricing/Price.jsx'
import Blog from './components/blog/Blog.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/common/title/footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/title"
            element={<Title subtitle="Hello" title="Welcome" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
