import Link from 'next/link';

export default function Page() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
            {/* Very faint teal gradient background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#E8F3ED] to-white" />
            
            <div className="relative z-10 w-full flex flex-col items-center p-8 gap-16">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center mt-20 gap-8 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-society-blue">
                        Welcome to <span className="text-society-teal">UNSW BoulderSoc</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium">
                        Sydney's premier community for rock climbers, boulderers, and outdoor enthusiasts of all levels.
                    </p>
                </section>

                {/* About Us */}
                <section className="bg-white border border-gray-100 p-10 md:p-14 rounded-3xl max-w-4xl w-full text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-society-teal" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-society-blue">Who Are We?</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
                        We are a passionate group of students who love climbing. 
                        Whether you are a seasoned pro projecting V10s, or someone who's never touched a climbing wall before, 
                        we provide a welcoming community for everyone. Come join us for weekly climbs, social events, outdoor trips, and more!
                    </p>
                </section>

                {/* Features/Pages Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
                    {/* Events */}
                    <div className="group bg-white p-8 rounded-3xl flex flex-col items-center text-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(152,203,177,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#E8F3ED] text-society-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🧗</span>
                        </div>
                        <h3 className="text-2xl font-bold text-society-blue">Events</h3>
                        <p className="text-slate-600 font-medium text-sm flex-grow">Join our weekly climbs, competitions, and social gatherings. There's always something happening!</p>
                        <Link href="/events" className="mt-4 bg-society-blue text-white px-6 py-3 rounded-full font-bold hover:bg-society-teal hover:text-society-blue transition-colors w-full">
                            View Events
                        </Link>
                    </div>

                    {/* Memberships */}
                    <div className="group bg-white p-8 rounded-3xl flex flex-col items-center text-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(152,203,177,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#E8F3ED] text-society-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🎟️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-society-blue">Memberships</h3>
                        <p className="text-slate-600 font-medium text-sm flex-grow">Become a member to get access to exclusive gym discounts, free gear hire, and special events.</p>
                        <Link href="/memberships" className="mt-4 bg-society-blue text-white px-6 py-3 rounded-full font-bold hover:bg-society-teal hover:text-society-blue transition-colors w-full">
                            Join Now
                        </Link>
                    </div>

                    {/* Merch */}
                    <div className="group bg-white p-8 rounded-3xl flex flex-col items-center text-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(152,203,177,0.2)] hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#E8F3ED] text-society-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">👕</span>
                        </div>
                        <h3 className="text-2xl font-bold text-society-blue">Merch</h3>
                        <p className="text-slate-600 font-medium text-sm flex-grow">Rep the society! Check out our custom t-shirts, chalk bags, and climbing accessories.</p>
                        <Link href="/merch" className="mt-4 bg-society-blue text-white px-6 py-3 rounded-full font-bold hover:bg-society-teal hover:text-society-blue transition-colors w-full">
                            Shop Merch
                        </Link>
                    </div>
                </section>

                {/* Sponsors */}
                <section className="flex flex-col items-center justify-center text-center gap-8 mt-4 mb-8 w-full max-w-5xl border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold text-society-blue">Our Sponsors</h2>
                    <p className="text-slate-600 font-medium">A huge thank you to the partners who make our community possible.</p>
                    <div className="flex flex-wrap justify-center gap-8 items-center mt-4">
                        {/* Replace these divs with Image components once you have the logos */}
                        <div className="w-40 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 font-bold text-sm">Sponsor Logo</span>
                        </div>
                        <div className="w-40 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 font-bold text-sm">Sponsor Logo</span>
                        </div>
                        <div className="w-40 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 font-bold text-sm">Sponsor Logo</span>
                        </div>
                        <div className="w-40 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 font-bold text-sm">Sponsor Logo</span>
                        </div>
                    </div>
                </section>

                {/* Connect With Us */}
                <section className="flex flex-col items-center justify-center text-center gap-6 mt-12 mb-20 w-full max-w-4xl border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold text-society-blue">Connect With Us</h2>
                    <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
                        <a href="https://www.instagram.com/unswbouldersoc/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-society-blue px-8 py-4 rounded-xl font-bold hover:border-society-teal hover:bg-[#E8F3ED] hover:text-society-teal transition-all min-w-[160px] shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            Instagram
                        </a>
                        <a href="https://discord.gg/vbQ4VcneA2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-society-blue px-8 py-4 rounded-xl font-bold hover:border-society-teal hover:bg-[#E8F3ED] hover:text-society-teal transition-all min-w-[160px] shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                            Discord
                        </a>
                    </div>
                    <p className="text-slate-500 font-medium text-sm">
                        For formal inquiries and partnerships, please contact us at <a href="mailto:unswbouldersoc@gmail.com" className="text-society-teal hover:underline font-bold">unswbouldersoc@gmail.com</a>
                    </p>
                </section>
            </div>
        </main>
    );
}