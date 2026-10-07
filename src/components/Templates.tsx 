'use client';

export default function Templates() {
  const templates = [
    { name: 'Recipe Card', desc: 'Perfect for single meal highlights', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
    { name: 'Listicle', desc: '10 Best ways to...', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400' },
    { name: 'How-To Guide', desc: 'Step-by-step tutorials', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400' },
    { name: 'Product Showcase', desc: 'Highlight your cookbooks', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400' },
    { name: 'Seasonal Plan', desc: 'Weekly meal prep plans', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
    { name: 'Quote / Inspiration', desc: 'Brand building content', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400' },
  ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto animate-fade-in">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-6">Pin Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden group hover:shadow-lg transition cursor-pointer">
            <div className="aspect-[2/3] bg-stone-100 relative overflow-hidden">
              <img src={t.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={t.name} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-white text-stone-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Use Template
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-xs text-stone-500 mt-1">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
