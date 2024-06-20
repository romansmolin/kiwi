'use client'

import React, { useState, useEffect } from 'react'
import ImageCarousel from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const carouselImages = [
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803796/Gallery1_yioh9a.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803797/Gallery2_md8zla.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803798/Gallery3_lteubr.jpg',
    'https://res.cloudinary.com/dgh3hceyt/image/upload/v1718803799/Gallery4_hhs5iy.jpg',
]

const GallerySection = () => {
    const [photoIndex, setPhotoIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhotoIndex(prevIndex => (prevIndex % carouselImages.length) + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div
                className="container relative mx-auto flex flex-col gap-16 px-4 pt-12 pb-20 text-center lg:flex-row lg:justify-between lg:gap-0 lg:px-8 lg:text-left"
            >
                <div className="lg:flex lg:w-1/2 lg:items-center">
                    <div >
                        <div
                            className="inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm leading-4 text-primary-600"
                        >
                            Лучшие Детские Праздники
                        </div>
                        <h2 className="mt-4 text-4xl text-primary-600">
                            Новый подход в организации праздников
                        </h2>
                        <h2 className="mt-4 text-xl leading-relaxed text-primary-600">
                            Компания Kiwi Animators организует праздники, придерживаясь индивидуального подхода к каждому клиенту. Мы предлагаем широкий спектр дополнительных услуг, которые могут значительно улучшить Ваше мероприятие.
                            Узнайте больше, уже сегодня!
                        </h2>
                        <div
                            className="flex flex-col justify-center gap-2 pt-10 sm:flex-row sm:items-center lg:justify-start"
                        >
                            <Button asChild className='bg-primary-600 p-6 gap-4'>
                                <Link
                                    href="javascript:void(0)"
                                >
                                    <Download />
                                    <span>Скачать каталог</span>
                                </Link>
                            </Button>
                            <Button asChild className='bg-primary-600 p-6'>
                                <Link
                                    href="javascript:void(0)"
                                >
                                    <span>Доступные герои</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                    <div className="relative mx-5 lg:w-96">
                        <div
                            className="hidden sm:block bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-primary-200  lg:size-72"
                        ></div>
                        <div
                            className="hidden sm:block bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-primary-100  lg:size-72"
                        ></div>
                        <div
                            className="hidden sm:block bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-primary-200  lg:size-72"
                        ></div>
                        <div
                            className="hidden sm:block bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-primary-100  lg:size-72"
                        ></div>
                        <div
                            className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 "
                        ></div>
                        <div
                            className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-primary-600/75 shadow-inner"
                        ></div>
                        <ImageCarousel
                            images={carouselImages}
                            className='w-auto sm:w-[350px] h-[400px]'
                        />
                    </div>
                </div>
            </div>
            <span id="contact-us" className='invisible'></span>
        </>
    )
}

export default GallerySection
