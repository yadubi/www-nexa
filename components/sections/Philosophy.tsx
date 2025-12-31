'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="relative py-32 border-t border-gold/10">
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 tracking-tight">
          {t.philosophy.title}
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide">
            {t.philosophy.paragraph1}
          </p>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide">
            {t.philosophy.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
