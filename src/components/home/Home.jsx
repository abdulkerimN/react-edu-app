import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Testimonial from './testimonial/Testimonial'
import HAbout from './HAbout'
import HBlog from './Hblog'
import Hprice from './Hprice'
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <Hprice />
    </div>
  );
}

export default Home
