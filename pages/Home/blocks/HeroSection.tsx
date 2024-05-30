import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MainImage from '../../../assets/kiwi_animators.png'



const features = [
    {label: 'Детские квесты'},
    {label: 'Различные шоу'},
    {label: 'Множество героев'},
    {label: 'Индивидуальный подход'},
]
const HeroSection = () => {
    return (
        <section className="flex gap-10 lg:gap-8 py-10 lg:py-24">
            <div className='flex gap-5 items-center'>
                <div className="mx-auto max-w-3xl flex flex-col gap-10">
                    <h1
                        className="bg-gradient-to-r from-secondary-400 via-primary-500 to-primary-600 bg-clip-text font-extrabold text-transparent sm:text-6xl"
                    >
                        Kiwi Animators

                        <span className="sm:block"> Детские Праздники </span>
                    </h1>

                    <ul className="grid grid-cols-2 gap-3">
                        {features.map(feature => (
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary-600"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-primary-600 font-bold text-md"> {feature.label} </span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                        <a
                            className="block w-full rounded border border-primary-600 bg-primary-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-primary-600 px-12 py-3 text-sm font-medium text-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-secondary-400 via-primary-500 to-primary-600 rounded-lg '>
                <Image
                    src={MainImage}
                    alt='Kiwi Animators'
                    width={750}
                    height={750}
                />
            </div>
        </section>
    )
}

export default HeroSection
