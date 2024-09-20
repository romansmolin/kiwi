import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const FormWidget: React.FC = () => {

    return (
        <Link
            href={{ query: { showModal: true } }}
            className='fixed z-10 flex justify-center h-16 w-16 p-2 border border-primary-400 bg-primary-100 border-dashed items-center bottom-7 right-7 lg:bottom-10 lg:right-10 rounded-full cursor-pointer'>
            <Logo className="h-16 w-16" />
        </Link>
    );
};

export default FormWidget;
