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
      {/* Background with subtle pattern/texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(var(--color-gold-rgb), 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Elegant gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Main headline - Editorial style with generous spacing */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-white mb-12 leading-[1.2] whitespace-pre-line">
          {t.hero.headline}
        </h1>

        {/* Thin divider */}
        <div className="w-16 h-px bg-gold/30 mx-auto mb-12" />

        {/* Subheading - Lighter, more refined */}
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed tracking-wide">
          {t.hero.subheading}
        </p>

        {/* CTA Button - Minimal gold accent */}
        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.2em] uppercase text-white font-light border border-gold/40 hover:border-gold/80 hover:bg-gold/5 transition-all duration-300"
        >
          <span className="relative z-10">{t.hero.cta}</span>
        </button>
      </div>

      {/* Scroll indicator - More subtle */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border border-gold/20 rounded-full flex items-start justify-center p-2">
          <div className="w-0.5 h-3 bg-gold/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
