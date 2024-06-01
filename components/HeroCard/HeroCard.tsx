import React, { ReactElement } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface HeroCardProps {
    img: string | StaticImport,
    title: string,
    text: string
}

const HeroCard: React.FC<HeroCardProps> = ({img, title, text}) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-primary-100 bg-clip-border text-primary-600 shadow-md">
            {/* <div className="relative mx-4 -mt-6 h-72 w-72 overflow-hidden rounded-[50%] bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div> */}
        <div className='relative m-auto'>
            <Image 
                src={img}
                alt={title}
                className='object-contain w-full h-full'
            />
        </div>

            {/* <div className="p-6 text-center">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
                </h5>
                <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                    {text}
                </p>
            </div> */}
        </div>
    )
}

export default HeroCard
