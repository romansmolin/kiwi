import React from 'react'
import EventForm from './EventForm'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import Logo from './Logo'

const FormModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='fixed z-10 flex justify-center h-16 w-16 p-2 border border-primary-400 bg-primary-100 border-dashed items-center bottom-7 right-7 lg:bottom-10 lg:right-10 rounded-full cursor-pointer'
                    variant="outline"
                >
                    <Logo className="h-16 w-16" />
                </Button>
            </DialogTrigger>
            <DialogContent className='overflow-y-scroll h-[600px] sm:overflow-auto sm:h-[unset]'>
                <DialogHeader>
                    <EventForm isModal />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default FormModal