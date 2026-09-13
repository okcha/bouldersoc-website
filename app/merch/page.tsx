export default function Page() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden p-8 pb-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#E8F3ED] to-white" />
            
            <div className="relative z-10 w-full flex flex-col items-center max-w-5xl">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-12 mb-12 text-society-blue">Merch</h1>
                
                {/* 2026 Collection */}
                <section className="bg-white border border-gray-100 p-10 rounded-3xl w-full text-center shadow-sm relative overflow-hidden mb-12">
                    <div className="absolute top-0 left-0 w-full h-2 bg-society-teal" />
                    <h2 className="text-3xl font-bold mb-4 text-society-blue">Deadpoint 2026</h2>
                    <p className="text-lg text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
                        [Template: Write a description of your 2026 drop here. E.g. "Our newest line of climbing shirts and chalk bags!"]
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Photo Placeholders */}
                        {[...Array(3)].map((_, i) => (
                            <div key={`2026-${i}`} className="aspect-square bg-slate-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-slate-400 font-medium flex-col gap-2 hover:bg-slate-100 transition-colors">
                                <span className="text-3xl">📷</span>
                                <span>Insert Image Here</span>
                                <span className="text-xs">[Item Name]</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2025 Collection */}
                <section className="bg-white border border-gray-100 p-10 rounded-3xl w-full text-center shadow-sm">
                    <h2 className="text-3xl font-bold mb-4 text-society-blue">2025 Collection</h2>
                    <p className="text-lg text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
                        [Template: Write a description of your previous collection here.]
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Photo Placeholders */}
                        {[...Array(3)].map((_, i) => (
                            <div key={`2025-${i}`} className="aspect-square bg-slate-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-slate-400 font-medium flex-col gap-2 hover:bg-slate-100 transition-colors">
                                <span className="text-3xl">📷</span>
                                <span>Insert Image Here</span>
                                <span className="text-xs">[Item Name]</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}