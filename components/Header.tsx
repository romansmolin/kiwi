'use client'

import React, { useEffect, useRef, useState } from 'react';
import { menuItems } from '../shared/consts';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
          when: 'afterChildren', // Animate children first, then container
          staggerChildren: 0.05,
          staggerDirection: -1, // Reverse the order of staggering for closing
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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false)

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
                            <ul className="flex items-center gap-6 text-m">
                                {menuItems.map(menuItem => (
                                    <li key={menuItem.label}>
                                        <a className="text-primary-600  transition hover:text-white" href={menuItem.href}> {menuItem.label} </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-primary-600 px-5 py-2.5 text-base font-medium text-white shadow"
                                href="#"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a className="rounded-md bg-gray-100 px-5 py-2.5 text-base font-medium text-primary-600"
                                    href="#"
                                >
                                    Register
                                </a>
                            </div>
                        </div> */}

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
            <motion.div
                initial="hidden"
                animate={isMenuOpened ? 'visible' : 'hidden'}
                variants={containerVariants}
                className={cn('w-full rounded bg-white' )}
            >
                <motion.ul className='flex flex-col gap-6 text-center'>
                    {menuItems.map((menuItem) => (
                        <motion.li key={menuItem.label} variants={itemVariants} className='text-primary-600 text-lg' onClick={openMenu}>
                            <a href={menuItem.href}>{menuItem.label}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </header>
    );
}

export default Header;
