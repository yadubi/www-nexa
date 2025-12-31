'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-40 border-t border-gold/10">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(var(--color-gold-rgb), 0.1) 25%, transparent 25%, transparent 75%, rgba(var(--color-gold-rgb), 0.1) 75%, rgba(var(--color-gold-rgb), 0.1)), linear-gradient(45deg, rgba(var(--color-gold-rgb), 0.1) 25%, transparent 25%, transparent 75%, rgba(var(--color-gold-rgb), 0.1) 75%, rgba(var(--color-gold-rgb), 0.1))`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Thinner section title */}
        <h2 className="text-5xl md:text-6xl font-light text-white mb-20 tracking-wide">
          {t.about.title}
        </h2>
        
        {/* Subtle divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />
        
        <div className="space-y-10">
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed tracking-wide whitespace-pre-line">
            {t.about.paragraph1}
          </p>
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed tracking-wide whitespace-pre-line">
            {t.about.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
