"use client"
import React, { useEffect, useState } from 'react'
import { languages } from '@/shared/consts'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

interface LanguageSelectorProps {
    closeMobileMenu?: () => void;
}

const LanguageSelector:React.FC<LanguageSelectorProps>= ({ closeMobileMenu }) => {
    const { lang } = useTranslation()

    const [isClicked, setIsClicked] = useState(false)
    const [currentLang, setCurrentLang] = useState(languages.filter(language => language.value === lang)[0])

    return (
        <>
            <div className='hidden md:block'>
                <div className='cursor-pointer' onClick={() => setIsClicked(prevState => !prevState)}>
                    {currentLang?.svg}
                </div>

                {isClicked && (
                    <div className='bg-white absolute rounded-md p-5 lg:right-4 xl:right-8 2xl:right-[unset]'>
                        <ul className='flex flex-col gap-5'>
                            {languages.map(language => (
                                <li key={language.value} className='cursor-pointer text-primary-600' onClick={() => setCurrentLang(language)}>
                                    <Link href={`/${language?.value}`} className='flex gap-5 items-center'>
                                        {language?.svg}
                                        {language?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='md:hidden flex justify-center'>
                <ul className='flex gap-5'>
                    {languages.map(language => (
                        <li 
                            key={language.value}
                            className='cursor-pointer text-primary-600' 
                            onClick={() => {
                                setCurrentLang(language)

                                if (typeof closeMobileMenu === 'function') {
                                    closeMobileMenu()
                                }
                            }}
                        >
                            <Link href={`/${language?.value}`} className='flex gap-5 items-center'>
                                {language?.svg}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default LanguageSelector
