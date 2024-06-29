'use client'

import React, { useEffect, useState } from 'react';
import { menuItems } from '../shared/consts';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from './LanguageSelector';

const containerVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2, delay: 0.1 },
            when: 'afterChildren',
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    visible: {
        opacity: 1,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        marginBottom: '1.5rem',
        height: 'auto',
        transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2, delay: 0.1 },
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};


const Header: React.FC = () => {
    const { t } = useTranslation("common")
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (window.scrollY > 0) {
            setIsScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    return (
        <header className={cn('shadow-sm px-4 fixed w-full z-40 transition-all duration-1000 top-0 left-0', isScrolled && 'bg-primary-100', isMenuOpened && 'rounded-b')}>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex h-height-for-header items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <Logo className="h-[70px] w-[70px]" />
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-lg">
                                {menuItems.map(menuItem => (
                                    <li key={menuItem.label}>
                                        <Link className="text-primary-600 transition hover:text-white" href={menuItem.href}> {t(menuItem.label)} </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden lg:block">
                        <LanguageSelector />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button onClick={openMenu} className="rounded bg-white p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpened && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={containerVariants}
                        className={cn('w-full rounded bg-white')}
                    >
                        <motion.ul className="flex flex-col gap-6 text-center">
                            {menuItems.map((menuItem) => (
                                <motion.li
                                    key={menuItem.label}
                                    variants={itemVariants}
                                    className="text-primary-600 text-lg"
                                    onClick={openMenu}
                                >
                                    <a href={menuItem.href}>{t(menuItem.label)}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
