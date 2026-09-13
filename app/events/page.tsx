export default function Page() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden p-8 pb-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#E8F3ED] to-white" />
            
            <div className="relative z-10 w-full flex flex-col items-center max-w-5xl">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-12 mb-12 text-society-blue">Events</h1>
                
                {/* Summary Textbox */}
                <section className="bg-white border border-gray-100 p-8 rounded-3xl w-full text-center shadow-sm relative overflow-hidden mb-12">
                    <div className="absolute top-0 left-0 w-full h-2 bg-society-teal" />
                    <h2 className="text-2xl font-bold mb-4 text-society-blue">About Our Events</h2>
                    <p className="text-slate-600 font-medium max-w-3xl mx-auto">
                        [Template: Write a summary of your typical events here. E.g. "We host weekly social climbs, technique workshops, and outdoor trips to the Blue Mountains. All skill levels are welcome!"]
                    </p>
                    <div className="flex justify-center mt-6">
                        <a href="https://www.instagram.com/unswbouldersoc/" target="_blank" rel="noopener noreferrer" className="bg-society-blue text-white px-8 py-3 rounded-full font-bold hover:bg-society-teal hover:text-society-blue transition-colors shadow-md text-sm">
                            Check Instagram for Updates
                        </a>
                    </div>
                </section>

                {/* Calendar */}
                <section className="bg-white border border-gray-100 p-8 rounded-3xl w-full shadow-sm">
                    <h2 className="text-3xl font-bold mb-8 text-society-blue text-center">September 2026</h2>
                    
                    <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
                        {/* Days of week */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <div key={day} className="bg-slate-50 py-3 text-center text-sm font-bold text-society-blue">
                                {day}
                            </div>
                        ))}
                        
                        {/* Empty Monday (Sept 1 2026 is a Tuesday) */}
                        <div className="bg-white min-h-[100px] p-2 text-slate-300"></div>
                        
                        {/* Days 1-30 */}
                        {[...Array(30)].map((_, i) => (
                            <div key={i+1} className="bg-white min-h-[120px] p-2 hover:bg-slate-50 transition-colors flex flex-col">
                                <span className="text-sm font-bold text-slate-500 mb-2">{i+1}</span>
                                {/* Event Placeholders for a few random days to show you how to add them */}
                                {(i+1 === 3 || i+1 === 10 || i+1 === 18) && (
                                    <div className="bg-[#E8F3ED] text-society-blue text-xs font-bold p-2 rounded-md mb-1 cursor-pointer hover:opacity-80 transition-opacity border border-society-teal/50">
                                        [Event Name]
                                        <div className="text-slate-500 font-normal mt-1">[Time / Location]</div>
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {/* Padding for end of month to complete grid */}
                        {[...Array(4)].map((_, i) => (
                            <div key={`end-${i}`} className="bg-white min-h-[100px] p-2 text-slate-300"></div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}