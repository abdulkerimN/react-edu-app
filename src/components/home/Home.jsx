import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Testimonial from './testimonial/Testimonial'
import HAbout from './HAbout'
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
    </div>
  )
}

export default Home
