'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Focus() {
  const { t } = useLanguage();

  return (
    <section id="focus" className="relative py-40 border-t border-gold/10">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/50 via-black to-black" />
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(var(--color-gold-rgb), 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-20 tracking-wide">
          {t.focus.title}
        </h2>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.focus.items.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 border border-gold/10 hover:border-gold/20 transition-all duration-500 bg-black/30 hover:bg-black/60"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/3 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="text-xs font-light text-gold/40 mb-3 tracking-[0.2em] uppercase">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-light text-gray-200 tracking-wide leading-relaxed">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
