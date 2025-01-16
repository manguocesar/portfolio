import type { Metadata } from 'next'
import '../styles/globals.css'

import { motion } from "framer-motion";
import { ComponentProps, lazy, ReactNode } from 'react'
const Navbar = lazy(() => import("../components/Navbar"));
const Sidebar = lazy(() => import("../components/Sidebar"));



export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>

                  
                            {children}
                        

            </body>
        </html>
    )
}