import React from 'react'
import HeroSection from './blocks/HeroSection'
import Prices from './blocks/Prices'
import ContactUs from './blocks/ContactUs'
import Benefits from './blocks/Benefits'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Prices />
      <ContactUs />
    </>
  )
}

export default Home
