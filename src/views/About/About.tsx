import Check from '@/components/icons/Check'
import React from 'react'
import { aboutUsContent } from '@/shared/consts'
import Image from 'next/image'
import Gallery from '@/components/Gallery'
import useTranslation from 'next-translate/useTranslation'
import { getI18n } from '../../../locales/server'

const galleryImages = [
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907028/event-3_uemn4t.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907027/event-6_e1qqq0.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907028/event-1_d2kmrj.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907027/event-10_sugrx5.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907027/event-5_cse5tg.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907028/event-4_gpwvqf.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907027/event-9_crr5ag.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907028/event-2_bdzt1r.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718907027/event-7_eet123.jpg',
]

const About = async () => {
    const t = await getI18n()

    return (
        <>
            <section className="flex flex-col lg:flex-row gap-10 lg:gap-8 py-10 lg:py-20 ">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="text-primary-600 text-lg flex flex-col gap-5 lg:gap-8">
                        <div>
                            <h2 className="bg-gradient-to-r title-gradient bg-clip-text  text-transparent text-5xl text-center lg:text-left sm:text-5xl">
                                {/* @ts-ignore */}
                                {t(aboutUsContent.aboutSection.title)}
                            </h2>
                            <div className='mt-6'>
                                {aboutUsContent.aboutSection.paragraphs.map((paragraph, index) => (

                                    <p className='mt-5' key={index}>
                                        {/* @ts-ignore */}
                                        {t(paragraph)}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <Image
                            src='https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803793/about_us_tpedp6.png'
                            alt='About Us'
                            width={600}
                            height={600}
                            className='lg:hidden m-auto'
                        />

                        <div>
                            <h2 className="bg-gradient-to-r title-gradient bg-clip-text  text-transparent text-5xl text-center lg:text-left sm:text-5xl">
                                {/* @ts-ignore */}
                                {t(aboutUsContent.trustSection.title)}
                            </h2>
                            <ul className="mt-6 list-none flex flex-col gap-5">
                                {aboutUsContent.trustSection.points.map((point, index) => (
                                    <li className="flex gap-5 items-center" key={index}>
                                        <span><Check /></span>
                                        {/* @ts-ignore */}
                                        {t(point)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="m-auto">
                        <Image
                            src='https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803793/about_us_tpedp6.png'
                            alt='About Us'
                            width={580}
                            height={580}
                            className='hidden lg:block'
                        />
                    </div>
                </div>
            </section>
            <section className='py-10'>
                <h2 className='text-5xl text-center text-primary-600'>{t("about-us.gallery-title")}</h2>
                <Gallery className="mt-10" images={galleryImages} />
            </section>
        </>
    )
}

export default About
