import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryProps {
    images: string[],
    className?: string
}

const Gallery: React.FC<GalleryProps> = ({ images, className = "" }) => {
    return (
        <div className={cn('relative -mx-4  md:mx-0 overflow-hidden', className)}>
            <div className="flex w-full md:grid md:grid-cols-3 md:gap-y-10 gap-2 overflow-x-auto px-4 sm:px-0">
                {images.map((image, idx) => (
                    <div className="flex-shrink-0 md:flex-shrink" key={`image-${idx}`}>
                        <Image
                            width={350}
                            height={300}
                            className="h-auto max-w-full rounded-lg"
                            src={image}
                            alt={`Gallery image ${idx}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
