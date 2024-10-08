import type { Metadata } from "next";
import { Rubik_Bubbles, Inter } from "next/font/google";
import '../../../shared/globals.css'
import { ReactNode } from "react";
import { FormModal, Header, LocationModal } from "@/components";
import { I18nProviderClient } from "../../../../locales/client";

export const bubbles = Rubik_Bubbles({
    weight: '400',
    subsets: ['latin', 'cyrillic'],
    variable: '--bubbles'

})

export const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})


interface RootLayoutProps {
    children: ReactNode
    params: {
        locale: string
    },
    searchParams: {
        showFormModal: boolean
    }
}

export default function Admin({ children, params, searchParams }: Readonly<RootLayoutProps>) {
    const { locale } = params

    return (
        <>
            <html lang={locale} className={`${bubbles.variable}`}>
                <body className={`${inter.className} main-page-gradient flex flex-col p-4 lg:p-0`}>
                    <main className="">
                        {children}
                    </main>
                </body>
            </html>
        </>
    );
}