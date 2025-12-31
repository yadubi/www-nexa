'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-48 border-t border-gold/10">
      {/* Minimal, elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-12 tracking-wide">
          {t.contact.title}
        </h2>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mx-auto mb-12" />
        
        <p className="text-xl font-light text-gray-400 mb-16 leading-relaxed tracking-wide">
          {t.contact.description}
        </p>

        {/* Email - Minimal and elegant */}
        <a
          href={`mailto:${t.contact.email}`}
          className="inline-block text-2xl md:text-3xl font-light text-gold/80 hover:text-gold transition-colors duration-500 tracking-wide mb-16 border-b border-gold/20 hover:border-gold/60 pb-2"
        >
          {t.contact.email}
        </a>

        <div className="mt-20 text-gray-500 font-light tracking-[0.2em] text-sm uppercase">
          {t.contact.location}
        </div>
      </div>
    </section>
  );
}
