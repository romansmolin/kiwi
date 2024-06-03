import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MainImage from '../../../assets/kiwi_animators.png'
import Check from '@/assets/icons/Check'

const features = [
    {label: 'Детские квесты'},
    {label: 'Различные шоу'},
    {label: 'Множество героев'},
    {label: 'Индивидуальный подход'},
]
const HeroSection = () => {
    
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-8 pt-10 lg:pt-10 lg:pb-0 lg:h-screen 2xl:h-auto">
            {/* CTA SECTION */}
            <div className='flex gap-5 items-center'>
                <div className="mx-auto max-w-3xl flex flex-col gap-10">
                    <h1 className="bg-gradient-to-r title-gradient bg-clip-text font-extrabold text-transparent text-5xl text-center lg:text-left  sm:text-6xl">
                        Kiwi Animatori
                        <span className="sm:block"> Детские Праздники </span>
                    </h1>

                    <ul className="grid grid-cols-2 gap-3">
                        {features.map(feature => (
                            <li key={feature.label} className="flex items-center gap-1">
                                <Check />
                                <span className="text-primary-600 font-bold text-md"> {feature.label} </span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        <a
                            className="block flex-1 w-full text-center rounded border border-primary-600 bg-primary-600 sm:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Подать заявку
                        </a>

                        <Link
                            className="block flex-1 w-full text-center rounded border border-primary-600 sm:px-12 py-3 text-sm font-medium text-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring sm:w-auto"
                            href="/about"
                        >
                            О нас
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Photo */}
            <div className='flex justify-center'>
                <Image
                    src={MainImage}
                    alt='Kiwi Animators'
                    className=''
                />
            </div>
        </section>
    )
}

export default HeroSection
