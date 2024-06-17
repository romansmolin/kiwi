import React from 'react'
import HeroSection from './blocks/HeroSection'
import Prices from './blocks/Prices'
import ContactUs from './blocks/ContactUs'
import Benefits from './blocks/Benefits'
import GallerySection from './blocks/GallerySection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Prices />
      <GallerySection/>
      <ContactUs />
    </>
  )
}

export default Home
