'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-black/50 rounded-full p-1 border border-gold/10">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-light tracking-wider transition-all duration-300 ${
          language === 'en'
            ? 'bg-gold/10 text-gold border border-gold/30'
            : 'text-gray-500 hover:text-gold/70'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1.5 rounded-full text-xs font-light tracking-wider transition-all duration-300 ${
          language === 'zh'
            ? 'bg-gold/10 text-gold border border-gold/30'
            : 'text-gray-500 hover:text-gold/70'
        }`}
      >
        中文
      </button>
    </div>
  );
}
