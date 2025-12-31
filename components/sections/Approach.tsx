'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="relative py-32 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 tracking-tight">
          {t.approach.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.approach.items.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 bg-zinc-950/50 hover:bg-zinc-950/80"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-gold" />
              
              <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
