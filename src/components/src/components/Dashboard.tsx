'use client';

export default function Dashboard() {
  const stats = [
    { label: 'Total Pins', value: '1,248', trend: '+12%', icon: 'image', color: 'bg-blue-50 text-blue-600' },
    { label: 'Scheduled', value: '42', icon: 'calendar-clock', color: 'bg-amber-50 text-amber-600' },
    { label: 'Published', value: '890', trend: '+5%', icon: 'check-circle-2', color: 'bg-green-50 text-green-600' },
    { label: 'Credits Left', value: '5,800', icon: 'zap', color: 'bg-brand-50 text-brand-600' },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-1">Good morning, Alex</h1>
          <p className="text-stone-500 text-sm">Your Pinterest engine is growing. Here's today's overview.</p>
        </div>
        <button className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Quick Create
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {stat.icon === 'image' && <><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>}
                  {stat.icon === 'calendar-clock' && <><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.25V14"/><path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/></>}
                  {stat.icon === 'check-circle-2' && <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></>}
                  {stat.icon === 'zap' && <><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></>}
                </svg>
              </div>
              {stat.trend && (
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  {stat.trend}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold font-serif text-stone-900">{stat.value}</p>
            <p className="text-[11px] text-stone-500 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 md:p-6 rounded-2xl border border-stone-200/60 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-stone-900">Pin Performance</h2>
            <select className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg px-2 py-1 outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="flex items-end justify-between h-40 gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-brand-100 rounded-t-lg relative group cursor-pointer" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-0 w-full bg-brand-600 rounded-t-lg transition-all group-hover:bg-brand-700" style={{ height: '100%' }}></div>
                </div>
                <span className="text-[10px] text-stone-400 font-medium">{'MTWTFSS'[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-900 to-stone-900 p-5 md:p-6 rounded-2xl shadow-sm text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-100"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              </div>
              <h2 className="font-semibold">AI Trend Alert</h2>
            </div>
            <p className="text-sm text-stone-300 mb-4 leading-relaxed">
              "High-Protein Vegan Fall Recipes" is trending up 340% on Pinterest. Create 3 pins for this topic today.
            </p>
            <button className="w-full py-2.5 bg-white text-stone-900 rounded-xl text-xs font-bold hover:bg-stone-100 transition flex items-center justify-center gap-2">
              Generate Pins
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-stone-900 mb-4">Recent Creations</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex-shrink-0 w-32 md:w-40 aspect-[2/3] bg-stone-100 rounded-xl overflow-hidden relative group cursor-pointer border border-stone-200/60">
              <img
                src={`https://images.unsplash.com/photo-${1626844131082 + i}-256783844137?w=400&q=80`}
                className="w-full h-full object-cover"
                alt={`Pin ${i}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-0 group-hover:opacity-100 transition"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
