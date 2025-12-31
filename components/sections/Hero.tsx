'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-tight">
          {t.hero.headline.split('.').map((part, index, array) => (
            <span key={index}>
              {part.trim()}
              {index < array.length - 1 && '.'}
              {index < array.length - 1 && <br className="hidden md:block" />}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide">
          {t.hero.subheading}
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest text-black font-medium bg-gold hover:bg-gold-light transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
