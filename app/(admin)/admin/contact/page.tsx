"use client"
import React, { useState } from 'react'

const AdminContact = () => {
    const [contactdata, setcontactdata] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const get_contact_info = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/contact");
            const result = await response.json();
            if (result.success) {
                setcontactdata(result.data);
            }
        } catch (e) {
            console.error("Failed to fetch data :", e)
        } finally {
            setLoading(false);
        }
    }

    // --- FILTER LOGIC START ---
    const filteredContacts = contactdata.filter((item) => {
        const search = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.email.toLowerCase().includes(search) ||
            item.subject.toLowerCase().includes(search)
        );
    });
    // --- FILTER LOGIC END ---

    return (
        <div className='bg-[#020617] text-slate-200 w-full min-h-screen p-4 md:p-10 font-sans selection:bg-amber-500/30'>
            
            {/* Background Decorative Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                            Inquiries
                            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700 uppercase tracking-widest">
                                {filteredContacts.length} Results
                            </span>
                        </h1>
                        <p className="text-slate-400 mt-2 text-sm font-medium">
                            Manage and filter your portfolio messages.
                        </p>
                    </div>
                    
                    <button 
                        onClick={get_contact_info}
                        disabled={loading}
                        className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-xl md:rounded-full font-bold transition-all hover:bg-amber-400 active:scale-95 disabled:opacity-50 shadow-lg shadow-white/5"
                    >
                        {loading && <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />}
                        {loading ? "Syncing..." : "Refresh Inbox"}
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-7xl mx-auto mb-6">
                <div className="relative group">
                    <input 
                        type="text"
                        placeholder="Search by name, email or subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800 text-slate-200 pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all placeholder:text-slate-600 shadow-inner"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto rounded-2xl md:rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden shadow-2xl">
                
                {/* Desktop Header */}
                <div className='hidden md:grid grid-cols-12 border-b border-slate-800 bg-slate-800/30 py-5 px-6'> 
                    <div className='col-span-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500'>Sender</div>
                    <div className='col-span-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500'>Topic</div>
                    <div className='col-span-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500'>Message Body</div>
                    <div className='col-span-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-right'>Received</div>
                </div>

                {/* List Body */}
                <div className='w-full overflow-y-auto max-h-[60vh] custom-scrollbar'>
                    {filteredContacts.length > 0 ? (
                        filteredContacts.map((data: any) => (
                            <div key={data._id} className='group border-b border-slate-800/50 last:border-0 hover:bg-white/[0.02] transition-all'>
                                
                                {/* Desktop View */}
                                <div className='hidden md:grid grid-cols-12 items-center py-6 px-6'>
                                    <div className='col-span-3 flex flex-col'>
                                        <span className='text-sm font-bold text-white flex items-center gap-2'>
                                            {data.status === 'unread' && <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />}
                                            {data.name}
                                        </span>
                                        <span className='text-[11px] text-slate-500 truncate pr-4'>{data.email}</span>
                                    </div>
                                    <div className='col-span-2'>
                                        <span className='text-[10px] font-bold text-amber-500/80 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded uppercase tracking-tighter'>
                                            {data.subject}
                                        </span>
                                    </div>
                                    <div className='col-span-5 px-2'>
                                        <p className='text-sm text-slate-400 line-clamp-1 group-hover:line-clamp-2 transition-all duration-300'>
                                            {data.message}
                                        </p>
                                    </div>
                                    <div className='col-span-2 text-[11px] font-mono text-slate-600 text-right'> 
                                        {new Date(data.createdAt).toLocaleDateString('en-PK', { month: 'short', day: 'numeric' })}
                                    </div>
                                </div>

                                {/* Mobile View */}
                                <div className='md:hidden p-5 flex flex-col gap-3'>
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className='text-base font-bold text-white flex items-center gap-2'>
                                                {data.name}
                                                {data.status === 'unread' && <span className="w-2 h-2 bg-amber-500 rounded-full" />}
                                            </span>
                                            <span className='text-xs text-slate-500'>{data.email}</span>
                                        </div>
                                        <span className='text-[10px] font-mono text-slate-600'>
                                            {new Date(data.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className='text-[10px] font-bold text-amber-500 uppercase tracking-widest'>
                                        {data.subject}
                                    </div>
                                    <p className='text-sm text-slate-300 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 leading-relaxed'>
                                        {data.message}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-24 flex flex-col items-center justify-center text-slate-600">
                             <svg className="w-12 h-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p className="text-sm font-medium">No results found for "{searchTerm}"</p>
                            <button onClick={() => setSearchTerm("")} className="mt-2 text-amber-500 text-xs hover:underline">Clear search</button>
                        </div>
                    )}
                </div>
            </div>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
            `}</style>
        </div>
    )
}

export default AdminContact;