export default function Page() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden p-8 pb-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#E8F3ED] to-white" />
            
            <div className="relative z-10 w-full flex flex-col items-center max-w-5xl">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-12 mb-12 text-society-blue">Memberships</h1>
                
                {/* Summary Box */}
                <section className="bg-white border border-gray-100 p-8 rounded-3xl w-full text-center shadow-sm relative overflow-hidden mb-12">
                    <div className="absolute top-0 left-0 w-full h-2 bg-society-teal" />
                    <h2 className="text-3xl font-bold mb-4 text-society-blue">Join UNSW BoulderSoc</h2>
                    <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto mb-8">
                        [Template: Summary of why people should join. E.g. "Get access to exclusive gym discounts, free chalk and gear hire at our weekly climbs, and invitations to our legendary social events!"]
                    </p>
                    <a 
                        href="https://campus.hellorubric.com/?s=8625" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-society-teal text-society-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-society-blue hover:text-white transition-colors shadow-sm inline-block"
                    >
                        Sign Up via Rubric
                    </a>
                </section>

                {/* Membership Options Table */}
                <section className="w-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm overflow-x-auto">
                    <h3 className="text-2xl font-bold mb-6 text-society-blue text-center">Membership Options</h3>
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b-2 border-society-teal">
                                <th className="p-4 text-society-blue font-bold">Type</th>
                                <th className="p-4 text-society-blue font-bold">Requirements</th>
                                <th className="p-4 text-society-blue font-bold">Price</th>
                                <th className="p-4 text-society-blue font-bold">Perks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100 hover:bg-[#E8F3ED]/50 transition-colors">
                                <td className="p-4 font-bold text-society-blue">Full Member</td>
                                <td className="p-4 text-slate-600">[Template: Must be a current UNSW student]</td>
                                <td className="p-4 text-slate-600 font-bold">[Template: $X]</td>
                                <td className="p-4 text-slate-600">[Template: All discounts, voting rights, free gear hire]</td>
                            </tr>
                            <tr className="hover:bg-[#E8F3ED]/50 transition-colors">
                                <td className="p-4 font-bold text-society-blue">Associate Member</td>
                                <td className="p-4 text-slate-600">[Template: Non-UNSW student or alumni]</td>
                                <td className="p-4 text-slate-600 font-bold">[Template: $Y]</td>
                                <td className="p-4 text-slate-600">[Template: All gym discounts, access to social events]</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
}