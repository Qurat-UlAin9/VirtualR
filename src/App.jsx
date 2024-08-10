
import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import FeatureSection from './FeaturesSection';
import Workflow from './Workflow';
import Pricing from './pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App