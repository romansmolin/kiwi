import { Rubik_Bubbles, Inter } from "next/font/google";
import { ReactNode } from "react";
import '../../../shared/globals.css'

export const bubbles = Rubik_Bubbles({
    weight: '400',
    subsets: ['latin', 'cyrillic'],
    variable: '--bubbles'

})

export const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})
interface AdminSignInLayoutProps {
    children: ReactNode
    params: {
        locale: string
    },
}

export default function AdminSignInLayout({ children, params }: Readonly<AdminSignInLayoutProps>) {
    const { locale } = params

    return (
        <html lang={locale} className={`${bubbles.variable}`}>
            <body className={`${inter.className} main-page-gradient flex flex-col md:flex-row h-screen`}>
                {children}
            </body>
        </html>
    );
}