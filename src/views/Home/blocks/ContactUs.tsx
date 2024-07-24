import React from 'react'
import EventForm from '@/components/EventForm'
import { BsTelegram, BsWhatsapp, BsEnvelope, BsPhone } from 'react-icons/bs';
import { getI18n, getCurrentLocale } from '../../../../locales/server';
import { I18nProviderClient } from '../../../../locales/client';

const ContactUs = async () => {
    const t = await getI18n()
    const locale = getCurrentLocale()

    return (
        <div className='relative sm:py-12'>
            <div className='w-full flex flex-col items-center lg:flex-row md:items-start md:gap-5 justify-between border rounded-2xl bg-primary-100'>
                <div className='lg:flex-1 px-4 py-12 sm:px-6 lg:px-8 flex flex-col gap-6'>
                    <h2 className='text-center lg:text-start text-5xl  text-primary-600'>{t("contacts.title")}</h2>
                    <p className='text-primary-600 text-lg text-center lg:text-start'>{t("contacts.text")}</p>
                    <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5'>
                        {contacts.map(contact => (
                            <div key={contact.title} className='rounded-2xl p-6 flex items-center justify-between bg-white lg:max-w-[350px]'>
                                <div className='flex flex-col'>
                                    <h3 className='text-primary-600 text-2xl '>{contact.title}</h3>
                                    <span>{contact.description}</span>
                                </div>
                                {contact.icon && <span className="text-primary-600">{contact.icon}</span>}
                            </div>
                        ))}
                    </div>
                </div>
                <I18nProviderClient locale={locale}>
                    <EventForm className='lg:flex-2 rounded-2xl bg-white px-4 py-8 sm:px-6 lg:px-8 flex-grow' />
                </I18nProviderClient>
            </div>
        </div>
    )
}

export default ContactUs

const contacts = [
    { title: 'Telegram', description: '@romasmolin201', icon: <BsTelegram className='w-7 h-7' /> },
    { title: 'WhatsApp', description: '+37120012057', icon: <BsWhatsapp className='w-7 h-7' /> },
    { title: 'Email', description: 'romasmolin29@gmail.com', icon: <BsEnvelope className='w-7 h-7' /> },
    { title: 'Phone', description: '+37120012057', icon: <BsPhone className='w-7 h-7' /> },
];
