'use client';

import { useLanguage } from '@/lib/i18n/language-context';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-light tracking-[0.2em] text-gold/80 hover:text-gold transition-colors duration-300"
          >
            NEXA CAPITAL
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.philosophy}
            </button>
            <button
              onClick={() => scrollToSection('focus')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.focus}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.insights}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-gold/80 transition-colors duration-300"
            >
              {t.nav.contact}
            </button>
          </div>

          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
