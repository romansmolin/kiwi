"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, Camera, Film, Menu, Users } from "lucide-react"

const links = [
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/characters", label: "Characters", icon: Users },
    { href: "/poster", label: "Poster", icon: Film },
    { href: "/gallery", label: "Gallery", icon: Camera },
]

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <div className="h-fit p-2 border w-full md:h-[unset] md:p-[unset] md:w-[unset]">
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 text-lg font-semibold"
                                onClick={() => setOpen(false)}
                            >
                                <link.icon className="h-6 w-6" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="hidden fixed h-screen w-[270px] flex-col gap-4 border-r bg-white p-4 md:flex">
                <div className="flex items-center px-2">
                    <h1 className="text-2xl font-bold text-primary-600">Kiwi Animations</h1>
                </div>
                <ScrollArea className="flex-1">
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 rounded-lg px-2 py-2 text-base font-semibold hover:bg-accent hover:text-accent-foreground"
                            >
                                <link.icon className="h-5 w-5" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </ScrollArea>
            </div>
        </>
    )
}