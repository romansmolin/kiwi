import React, { ReactElement } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface HeroCardProps {
    img: string | StaticImport,
    title: string,
    text: string
}

const HeroCard: React.FC<HeroCardProps> = ({ img, title, text }) => {
    return (
        <div className="relative flex items-center justify-between w-80 flex-col rounded-xl bg-primary-100 bg-clip-border text-primary-600 shadow-md">
            <div className='w-full h-[290px] flex-2'>
                <Image
                    src={img}
                    alt={title}
                    className='object-contain w-full h-full'
                />
            </div>

            <div className="p-6 text-center flex-1">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default HeroCard
