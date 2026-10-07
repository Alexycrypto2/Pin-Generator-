'use client';

import { useState } from 'react';

export default function CreatePin() {
  const [aspectRatio, setAspectRatio] = useState('2:3');
  const [title, setTitle] = useState('Creamy Chickpea Pasta');
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const ratios: Record<string, { w: number; h: number }> = {
    '2:3': { w: 200, h: 300 },
    '1:1': { w: 200, h: 200 },
    '9:16': { w: 168, h: 300 },
    '19:6': { w: 316, h: 100 },
    '4:5': { w: 200, h: 250 },
  };
  const currentRatio = ratios[aspectRatio];

  const handleGenerate = async () => {
    setLoading(true);
    setShowPreview(false);
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, aspectRatio }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setShowPreview(true);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full animate-fade-in">
      <div className="lg:w-96 bg-white border-b lg:border-b-0 lg:border-r border-stone-200/60 overflow-y-auto flex-shrink-0 max-h-[calc(100vh-140px)] lg:max-h-full">
        <div className="p-4 md:p-6 space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold mb-1">Create Pin</h2>
            <p className="text-xs text-stone-500">AI-powered generation.</p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Aspect Ratio</label>
            <div className="flex lg:grid lg:grid-cols-5 gap-2 overflow-x-auto no-scrollbar pb-1">
              {Object.keys(ratios).map((key) => (
                <button
                  key={key}
                  onClick={() => setAspectRatio(key)}
                  className={`flex-shrink-0 lg:flex-shrink flex flex-col items-center justify-center py-2 px-3 rounded-lg border transition-all ${
                    aspectRatio === key
                      ? 'border-brand-600 bg-brand-50 text-brand-700 ring-1 ring-brand-600'
                      : 'border-stone-200 bg-white text-stone-500'
                  }`}
                >
                  <span className="text-[10px] font-bold">{key}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Headline</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/10 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Subtitle</label>
              <input
                type="text"
                defaultValue="High-Protein • Plant-Based"
                className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-brand-600 transition-all"
              />
            </div>
          </div>

          <div className="p-4 bg-brand-50/50 rounded-xl border border-brand-100">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              <span className="text-xs font-bold text-brand-900">Gemini SEO Auto-Fill</span>
            </div>
            <p className="text-[11px] text-stone-600 mb-3">
              AI will automatically generate optimized titles, descriptions, and hashtags based on your headline.
            </p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-stone-300 text-brand-600 focus:ring-brand-600" />
              <span className="text-xs font-medium text-stone-700">Enable auto-optimization</span>
            </label>
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-stone-200/60 bg-stone-50/50 sticky bottom-0">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-xl font-semibold text-sm flex justify-center items-center gap-2 hover:from-black hover:to-stone-900 transition-all disabled:opacity-70 shadow-lg shadow-stone-900/20"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
            )}
            {loading ? 'Generating...' : 'Generate Pin'}
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#FAFAF9] dot-grid flex items-center justify-center p-4 md:p-8 overflow-auto relative min-h-[400px]">
        {showPreview ? (
          <div className="relative group transition-all duration-500 animate-fade-in">
            <div
              className="relative overflow-hidden rounded-xl shadow-2xl bg-cover bg-center ring-1 ring-black/5"
              style={{
                width: `${currentRatio.w}px`,
                height: `${currentRatio.h}px`,
                backgroundImage: 'url(https://images.unsplash.com/photo-1626844131082-256783844137?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/10 to-transparent"></div>
              <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-white/90 backdrop-blur-sm text-brand-700 text-[8px] md:text-[9px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full tracking-wider shadow-sm flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                PLANTED & SIMPLE
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-center">
                <h3
                  className="font-serif font-bold text-stone-900 leading-[1.1] mb-1 drop-shadow-sm"
                  style={{ fontSize: aspectRatio === '19:6' ? '12px' : '16px' }}
                >
                  {title.toUpperCase()}
                </h3>
                <button className="bg-stone-900 text-white text-[8px] md:text-[9px] font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                  GET RECIPE →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-stone-400">
            <div className="w-10 h-10 border-3 border-brand-600/20 border-t-brand-600 rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium">AI is generating...</p>
          </div>
        )}
      </div>
    </div>
  );
    }
