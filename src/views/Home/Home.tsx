import React from 'react'
import HeroSection from './blocks/HeroSection'
import Prices from './blocks/Prices'
import ContactUs from './blocks/ContactUs'
import Benefits from './blocks/Benefits'
import GallerySection from './blocks/GallerySection'
import { I18nProviderClient } from '../../../locales/client'
import { getCurrentLocale } from '../../../locales/server'

const Home = () => {
	const locale = getCurrentLocale()
	return (
		<>
			<HeroSection />
			<Benefits />
			<Prices />
			<I18nProviderClient locale={locale}>
				<GallerySection />
			</I18nProviderClient>
			<ContactUs />
		</>
	)
}

export default Home
