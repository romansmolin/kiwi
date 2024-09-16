'use client'
import React, { useEffect, useRef, useState } from 'react';
import EventForm from './EventForm';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { X } from 'lucide-react';
import Logo from './Logo';

const FormWidget: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const locale = useCurrentLocale();


    const handleWidgetClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <I18nProviderClient locale={locale}>
            <div
                className='fixed z-10 flex justify-center h-16 w-16 p-2 border border-primary-400 bg-primary-100 border-dashed items-center bottom-7 right-7 lg:bottom-10 lg:right-10 rounded-full cursor-pointer'
                onClick={handleWidgetClick}
            >
                <Logo className="h-16 w-16" />
            </div>

            {isVisible &&
                <div
                    className='fixed p-5 mt-16 lg:mt-10 border border-dashed border-primary-400 right-[50%] 
                    translate-x-[50%] lg:top-[50%] lg:-translate-y-[50%] w-full lg:w-[70%] lg:h-[80%] bg-primary-100 bg-opacity-50 
                    flex justify-center items-center rounded-lg custom-backdrop-filter'
                >
                    <X className='absolute top-2 right-2 cursor-pointer text-primary-600' onClick={handleWidgetClick} />
                    <EventForm />
                </div>
            }
        </I18nProviderClient>
    );
};

export default FormWidget;
