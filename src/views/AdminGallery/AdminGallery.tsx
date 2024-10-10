"use client"
import { GalleryControl, GalleryUploader } from '@/components/admin'
import { axiosClient } from '@/shared/api/axiosClient'
import React, { useEffect, useState } from 'react'

type Image = {
    _id: string,
    image: string
}

const AdminGallery = () => {
    const [galleryImages, setGalleryImages] = useState<{ data: Image[] } | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    const fetchGallery = async () => {
        setIsLoading(true);
        try {
            const { data } = await axiosClient.get('/gallery/all-images');
            setGalleryImages(data);
        } catch (err) {
            console.error('Error fetching gallery:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    return (
        <div className='flex flex-col'>
            <GalleryUploader onUploadSuccess={fetchGallery} />
            {galleryImages?.data && galleryImages.data.length > 0 && (
                <GalleryControl
                    images={galleryImages?.data}
                    refetchGallery={fetchGallery}
                    isLoading={isLoading}
                />
            )}
        </div>
    )
}

export default AdminGallery