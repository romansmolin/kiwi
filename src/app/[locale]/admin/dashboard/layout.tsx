import { Rubik_Bubbles, Inter } from "next/font/google";
import { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin";

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
}

export default function AdminDashboard({ children, params }: Readonly<RootLayoutProps>) {
    const { locale } = params

    return (
        <>
            <AdminSidebar />
            <main className="ml-[270px] p-4 flex-1">
                {children}
            </main>
        </>
    );
}