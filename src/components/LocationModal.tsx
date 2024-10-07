"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { useI18n } from '../../locales/client'
import { Button } from './ui/button'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type Location = 'uk' | 'lv' | null

const LocationModal = () => {
    const t = useI18n()
    const [isModalVisible, setModalVisible] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [location, setLocation] = useState<Location>(null)
    const router = useRouter()

    const locationCardStyle = "w-1/2 p-10 flex justify-center items-center text-center text-lg border text-primary-600 border-primary-600 rounded-lg hover:text-white hover:bg-primary-600 cursor-pointer focus:border-4"

    const navigation: Record<string, () => void> = {
        'uk': () => router.push('/en'),
        'lv': () => router.push('/lv'),
    }

    useEffect(() => {
        const modalShown = sessionStorage.getItem('location')
        if (!modalShown) {
            setModalVisible(true)
        }
    }, [])

    const handleSave = () => {
        if (location) {
            sessionStorage.setItem('location', location)
            setModalVisible(false)
            navigation[location]()
        } else {
            setShowAlert(true)
        }
    }

    const handleClose = () => {
        const isLocationChoosed = sessionStorage.getItem('location')
        if (isLocationChoosed) {
            setModalVisible(false)
        } else {
            setShowAlert(true)
        }
    }

    return (
        <Dialog open={isModalVisible} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader className="space-y-7">
                    <DialogTitle className="text-center text-3xl">
                        {t('location-modal.heading')}
                    </DialogTitle>
                    <DialogDescription className="flex gap-5 justify-center">
                        <div
                            onClick={() => setLocation('uk')}
                            className={cn(locationCardStyle, location === 'uk' ? 'text-white bg-primary-600' : '')}
                        >
                            {t('location-modal.option-eng')}
                        </div>
                        <div
                            onClick={() => setLocation('lv')}
                            className={cn(locationCardStyle, location === 'lv' ? 'text-white bg-primary-600' : '')}
                        >
                            {t('location-modal.option-lv')}
                        </div>
                    </DialogDescription>
                    <Button className="bg-primary-600" onClick={handleSave}>
                        {t('location-modal.save-button')}
                    </Button>
                </DialogHeader>
                {showAlert && (
                    <Alert className="text-primary-600 space-y-4">
                        <AlertTitle>{t('location-modal.warning')}</AlertTitle>
                        <AlertDescription>
                            {t('location-modal.warning-description')}
                        </AlertDescription>
                    </Alert>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default LocationModal
