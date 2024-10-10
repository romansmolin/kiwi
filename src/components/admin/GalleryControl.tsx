'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { axiosClient } from '@/shared/api/axiosClient'

type Image = {
    _id: string,
    image: string
}

interface GalleryControlProps {
    images: Image[]
    refetchGallery: () => void
    isLoading: boolean
}

const GalleryControl: React.FC<GalleryControlProps> = ({ images, refetchGallery, isLoading }) => {

    useEffect(() => {
        console.log('images: ', images)
    }, [images])

    const handleDelete = async (id: string) => {
        try {
            await axiosClient.delete(`/gallery/image/${id}`)
            refetchGallery()
        } catch (err) {
            console.error(err)
        }

        console.log(`Delete image with id: ${id}`)
    }

    return (
        <div className="container max-w-[unset] w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:grid-cols-5">
                {images.map((image) => (
                    <div key={image.image} className="flex flex-col items-center">
                        <div className="relative w-full pt-[100%]">
                            <Image
                                src={image.image}
                                alt={image.image}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <Button
                            className="mt-2 w-full bg-primary-600"
                            onClick={() => handleDelete(image._id)}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryControl