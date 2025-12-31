'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="relative py-40 border-t border-gold/10">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(var(--color-gold-rgb), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--color-gold-rgb), 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-20 tracking-wide">
          {t.approach.title}
        </h2>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.approach.items.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 border border-gold/10 hover:border-gold/25 transition-all duration-500 bg-zinc-950/30 hover:bg-zinc-950/50"
            >
              {/* Minimal gold accent line */}
              <div className="absolute top-0 left-0 w-8 h-px bg-gold/30 group-hover:w-16 transition-all duration-500" />
              
              <p className="text-lg font-light text-gray-300 leading-relaxed tracking-wide">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
