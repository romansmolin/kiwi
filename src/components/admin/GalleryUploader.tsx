"use client"

import { Label } from '@radix-ui/react-label'
import { AlertCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { axiosClient } from '@/shared/api/axiosClient'

interface GalleryUploaderProps {
    onUploadSuccess: () => void
}

const GalleryUploader: React.FC<GalleryUploaderProps> = ({ onUploadSuccess }) => {
    const [imageUrl, setImageUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!imageUrl) {
            setError('Please enter an image URL')
            return
        }

        try {
            await axiosClient.post('/gallery/image', {
                imageUrl
            })
            onUploadSuccess()
        } catch (err) {
            console.error(err)
        }
        setError('')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.target.value)
        setError('')
    }

    return (
        <Card className="w-full  mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-600">Photo Uploader</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                            id={`photo-uploader`}
                            value={imageUrl}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                        {error && (
                            <p id="imageUrlError" className="text-sm text-red-500 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {error}
                            </p>
                        )}
                    </div>
                    <Button type="submit" className="w-full bg-primary-600">Upload Photo</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default GalleryUploader