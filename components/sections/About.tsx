'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 tracking-tight">
          {t.about.title}
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide whitespace-pre-line">
            {t.about.paragraph1}
          </p>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide whitespace-pre-line">
            {t.about.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
