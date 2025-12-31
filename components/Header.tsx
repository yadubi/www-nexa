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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-light tracking-wider text-gold hover:text-gold-light transition-colors"
          >
            NEXA CAPITAL
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
            >
              {t.nav.philosophy}
            </button>
            <button
              onClick={() => scrollToSection('focus')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
            >
              {t.nav.focus}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
            >
              {t.nav.insights}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide text-gray-300 hover:text-gold transition-colors"
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
