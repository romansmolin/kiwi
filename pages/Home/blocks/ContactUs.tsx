import React from 'react'
import KiwiFooterPhoto from '../../../assets/kiwi_footer.png'
import Image from 'next/image'
import EventForm from '@/components/EventForm/EventForm'

const ContactUs = () => {
    return (
        <div className='relative'>
            <EventForm 
                className='sm:absolute sm:right-[50%] sm:translate-x-[50%]'
            />

            <Image
                src={KiwiFooterPhoto}
                alt="Kiwi Animators"
                width={900}
                height={700}
                className='m-auto absolute sm:relative bottom-[-158px] -z-10'
            />
        </div>
    )
}

export default ContactUs
