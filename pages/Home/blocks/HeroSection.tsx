import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-8 pt-10 lg:pt-10 lg:pb-0 xl:h-auto">
            {/* CTA SECTION */}
            <div className='flex gap-5 items-center justify-center'>
                <div className="mx-auto max-w-3xl flex flex-col gap-10">
                    <h1 className="bg-gradient-to-r title-gradient bg-clip-text  text-transparent text-5xl text-center lg:text-left  sm:text-6xl">
                        Kiwi Animatori
                        <span className="sm:block"> Детские Праздники </span>
                    </h1>

                    <div className="flex gap-4 w-full md:w-[500px]">
                        <Button asChild className='bg-primary-600 w-1/2 hover:bg-primary-600 py-6'>
                            <Link href="#contact-us">
                                Подать заявку
                            </Link>
                        </Button>

                        <Button asChild className='bg-transparent w-1/2 text-primary-600 py-6 border  border-primary-600 hover:bg-primary-600 hover:text-white'>
                            <Link href="/about">
                                О нас
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Photo */}
            <div className='flex justify-center'>
                <Image
                    src='https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803802/kiwi_animators_cldhv9.png'
                    width={750}
                    height={750}
                    alt='Kiwi Animators'
                    className=''
                />
            </div>
        </section>
    )
}

export default HeroSection
