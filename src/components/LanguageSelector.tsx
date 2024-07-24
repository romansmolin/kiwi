"use client"
import React, { useEffect, useRef, useState, MouseEvent, useCallback } from 'react'
import { languages } from '@/shared/consts'
import Link from 'next/link'
import { useCurrentLocale } from '../../locales/client'
import { usePathname } from 'next/navigation'
import useGetCorrectHref from '@/hooks/getCorrectHref'
interface LanguageSelectorProps {
    closeMobileMenu?: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ closeMobileMenu }) => {
    const locale = useCurrentLocale()
    const [isClicked, setIsClicked] = useState(false)
    const [currentLang, setCurrentLang] = useState(languages.filter(language => language.value === locale)[0])
    const pathname = usePathname()
    const getCorrectHref = useGetCorrectHref(locale)

    const selectorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside: EventListener = (event) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
                setIsClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectorRef]);

    return (
        <>
            <div ref={selectorRef} className='hidden md:block'>
                <div className='cursor-pointer' onClick={() => setIsClicked(prevState => !prevState)}>
                    {currentLang?.svg}
                </div>

                {isClicked && (
                    <div className='bg-white absolute rounded-md p-5 lg:right-4 xl:right-8 2xl:right-[unset]'>
                        <ul className='flex flex-col gap-5'>
                            {languages.map(language => (
                                <li key={language.value} className='cursor-pointer text-primary-600' onClick={() => setCurrentLang(language)}>
                                    <Link href={getCorrectHref(language.value, pathname)} className='flex gap-5 items-center'>
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
                            <Link href={getCorrectHref(language.value, pathname)} className='flex gap-5 items-center'>
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
