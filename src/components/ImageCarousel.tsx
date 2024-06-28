'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
    images: string[]
    className?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={cn('relative overflow-hidden mx-auto rounded-lg shadow-lg transition-opacity duration-500 ease-in-out', className)}>
            {images.map((src, index) => (
                <div
                    key={index}
                    className={cn('absolute inset-0 transition-opacity duration-1000 ease-in-out', index === currentIndex ? 'opacity-100' : 'opacity-0')}
                >
                    <Image
                        src={src}
                        width={300}
                        height={300}
                        layout="responsive"
                        className="object-cover w-full h-full"
                        alt={`Gallery Image ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageCarousel;
