'use client'

import React, { useEffect, useRef, useState } from 'react';
import { menuItems } from '../../shared/consts';
import Logo from '@/assets/Logo';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`shadow-sm px-4 fixed w-full z-40 transition-all duration-1000 top-0 left-0 ${isScrolled && 'bg-primary-100'}`}>
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
                                        <a className="text-primary-600 font-bold transition hover:text-white" href={menuItem.href}> {menuItem.label} </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="#"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary-600"
                                    href="#"
                                >
                                    Register
                                </a>
                            </div>
                        </div> */}

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
        </header>
    );
}

export default Header;
