'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32 border-t border-gold/10">
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
          {t.contact.title}
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed tracking-wide">
          {t.contact.description}
        </p>

        <a
          href={`mailto:${t.contact.email}`}
          className="inline-block text-2xl md:text-3xl text-gold hover:text-gold-light transition-colors duration-300 tracking-wide mb-12"
        >
          {t.contact.email}
        </a>

        <div className="mt-12 text-gray-500 tracking-widest text-sm">
          {t.contact.location}
        </div>
      </div>
    </section>
  );
}
