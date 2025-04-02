import type { Metadata } from 'next'
import { robotoMono } from '@/app/ui/fonts'
import './globals.css'

export const metadata: Metadata = {
    title: 'Matt Bieber - Front-end and Full-stack engineer in Portland, Oregon. React, Node.js and Next.js for web and mobile experiences',
    description: 'Personal contact page for Matt Bieber',
    keywords: []

}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${robotoMono.className} antialiased flex justify-center`}>
                {children}
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            </body>
        </html>
    )
}
