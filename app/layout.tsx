
import Link from 'next/link'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header className="flex justify-between p-6 bg-white border-b border-society-blue">
                    <div>BoulderSoc Logo</div>

                    <nav className='flex gap-4'>
                        <Link href="/events" className='hover:text-society-teal'>Events</Link>
                        <Link href="/memberships" className='hover:text-society-teal'>Memberships</Link>
                        <Link href="/merch" className='hover:text-society-teal'>Merch</Link>
                    </nav>
                </header>
                
                <main>
                    {children}
                </main>

                <footer className="p-8 boarder-t border-zinc-800 flex justify-between items-center text-sm text-zinc-500">
                    <div>© 2026 | UNSW BoulderSoc.</div>
                    <div>unswbouldersoc@gmail.com</div>
                </footer>
            </body>
        </html>
    )
}