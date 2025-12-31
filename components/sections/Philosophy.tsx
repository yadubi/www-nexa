'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="relative py-40 border-t border-gold/10">
      {/* Subtle background gradient with pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-950 to-black" />
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(201, 169, 97, 0.1) 0px, transparent 1px, transparent 2px, rgba(201, 169, 97, 0.1) 3px)`,
          backgroundSize: '100% 3px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-20 tracking-wide">
          {t.philosophy.title}
        </h2>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />
        
        <div className="space-y-10">
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed tracking-wide">
            {t.philosophy.paragraph1}
          </p>
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed tracking-wide">
            {t.philosophy.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
