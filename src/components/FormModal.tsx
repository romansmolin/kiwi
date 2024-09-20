
"use client"

import React from 'react'
import EventForm from './EventForm'
import { X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useScrollLock from '@/hooks/useScrollLock'


const FormModal = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const isModalOpened = searchParams.get('showModal') === 'true'
    const pathname = usePathname()
    useScrollLock(isModalOpened)

    if (!isModalOpened) return null;

    const closeModal = () => {
        const nextSearchParams = new URLSearchParams(searchParams.toString())
        nextSearchParams.delete('showModal')

        router.replace(`${pathname}?${nextSearchParams}`, { scroll: false })
    }

    return (
        <div className='fixed py-2 px-3 z-50 lg:mt-10 border border-dashed border-primary-400 right-[50%] 
            translate-x-[50%] lg:top-[50%] lg:-translate-y-[50%] w-full lg:w-[70%] lg:h-[80%] bg-primary-100 bg-opacity-50 
            flex justify-center items-center rounded-lg custom-backdrop-filter'
        >
            <X className='absolute top-2 right-2 cursor-pointer text-primary-600' onClick={() => closeModal()}/>
            <EventForm className='lg:w-fit' isMini />
        </div>
    )
}

export default FormModal