import React from 'react'
import HeroSection from './blocks/HeroSection'
import Prices from './blocks/Prices'
import ContactUs from './blocks/ContactUs'
import Benefits from './blocks/Benefits'
import GallerySection from './blocks/GallerySection'
import useTranslation from "next-translate/useTranslation";

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <h6 className='text-5xl text-primary-950'>{t("hero-section.title")}</h6>
      <HeroSection />
      <Benefits />
      <Prices />
      <GallerySection />
      <ContactUs />
    </>
  )
}

export default Home
