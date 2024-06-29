"use client"
import React, { useEffect } from 'react'
import { languages } from '@/shared/consts'
import useTranslation from 'next-translate/useTranslation'

const LanguageSelector = () => {
    const { t, lang } = useTranslation()
    const currentLang = languages.filter(language => language.value === lang)[0]

    useEffect(() => {
        console.log(currentLang)
    }, [])

    return (
        <div>

        </div>
    )
}

export default LanguageSelector
