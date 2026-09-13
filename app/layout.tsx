import Link from 'next/link'
import Image from 'next/image'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
            <body className="font-sans antialiased bg-[#FAFAFA] text-slate-800 flex flex-col min-h-screen">
                <header className="flex justify-between py-3 px-8 bg-white/90 backdrop-blur-md border-b border-gray-200 items-center sticky top-0 z-50 shadow-sm">
                    <Link href="/">
                        <Image src="/logo.png" alt="UNSW BoulderSoc Logo" width={48} height={48} className="object-contain hover:scale-105 transition-transform" />
                    </Link>

                    <nav className='flex gap-6 font-bold text-sm tracking-wide uppercase text-society-blue'>
                        <Link href="/" className='hover:text-society-teal transition-colors'>Home</Link>
                        <Link href="/events" className='hover:text-society-teal transition-colors'>Events</Link>
                        <Link href="/memberships" className='hover:text-society-teal transition-colors'>Memberships</Link>
                        <Link href="/merch" className='hover:text-society-teal transition-colors'>Merch</Link>
                    </nav>
                </header>
                
                <div className="flex-grow">
                    {children}
                </div>

                <footer className="py-4 px-8 border-t border-gray-200 text-slate-400 flex justify-center items-center text-xs">
                    <div>© 2026 | UNSW BoulderSoc.</div>
                </footer>
            </body>
        </html>
    )
}