import Check from '@/components/icons/Check'
import React from 'react'
import { aboutUsContent } from '@/shared/consts'
import Image from 'next/image'

const About = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-8 py-10 lg:py-20">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="text-primary-600 text-lg flex flex-col gap-5 lg:gap-8">
                    <div>
                        <h2 className="bg-gradient-to-r title-gradient bg-clip-text  text-transparent text-5xl text-center lg:text-left sm:text-5xl">
                            {aboutUsContent.aboutSection.title}
                        </h2>
                        <div className='mt-6'>
                            {aboutUsContent.aboutSection.paragraphs.map((paragraph, index) => (
                                <p className='mt-5' key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <Image
                        src='/assets/images/about_us.png'
                        alt='About Us'
                        width={600}
                        height={600}
                        className='lg:hidden m-auto'
                    />

                    <div>
                        <h2 className="bg-gradient-to-r title-gradient bg-clip-text  text-transparent text-5xl text-center lg:text-left sm:text-5xl">
                            {aboutUsContent.trustSection.title}
                        </h2>
                        <ul className="mt-6 list-none flex flex-col gap-5">
                            {aboutUsContent.trustSection.points.map((point, index) => (
                                <li className="flex gap-5 items-center" key={index}>
                                    <span><Check /></span> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="m-auto">
                    <Image
                        src='/assets/images/about_us.png'
                        alt='About Us'
                        width={580}
                        height={580}
                        className='hidden lg:block'
                    />
                </div>
            </div>
        </section>
    )
}

export default About
