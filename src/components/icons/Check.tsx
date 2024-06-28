import React, { FC } from 'react'

interface SvgProps {
    className?: string
}

const Check: FC<SvgProps> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-5 text-primary-600 ${className && className}`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    )
}

export default Check
