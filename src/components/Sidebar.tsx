'use client';

interface SidebarProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export default function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Home' },
    { id: 'create', icon: 'sparkles', label: 'Create' },
    { id: 'templates', icon: 'layers', label: 'Templates' },
    { id: 'schedule', icon: 'calendar-clock', label: 'Queue' },
    { id: 'scraper', icon: 'link', label: 'Scraper' },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-stone-200/60 flex-col justify-between flex-shrink-0">
      <div>
        <div className="h-16 flex items-center px-6 border-b border-stone-100">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
          <span className="font-serif font-bold text-base ml-3 whitespace-nowrap">Planted & Simple</span>
        </div>
        <nav className="p-3 space-y-1 mt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeNav === item.id
                  ? 'bg-brand-50 text-brand-700 shadow-sm'
                  : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                {item.icon === 'layout-dashboard' && <><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></>}
                {item.icon === 'sparkles' && <><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></>}
                {item.icon === 'layers' && <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>}
                {item.icon === 'calendar-clock' && <><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.25V14"/><path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/></>}
                {item.icon === 'link' && <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>}
              </svg>
              <span>{item.label}</span>
              {item.id === 'create' && (
                <span className="ml-auto text-[9px] font-bold bg-brand-600 text-white px-1.5 py-0.5 rounded-md">
                  PRO
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-stone-100">
        <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-stone-500 uppercase">Credits</span>
            <span className="text-[10px] font-bold text-brand-600">5,800 left</span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-1.5 mb-3">
            <div className="bg-brand-600 h-1.5 rounded-full" style={{ width: '58%' }}></div>
          </div>
          <button className="w-full py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-black transition">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
                }
