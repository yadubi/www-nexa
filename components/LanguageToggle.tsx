'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-black/50 rounded-full p-1 border border-gold/20">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all ${
          language === 'en'
            ? 'bg-gold text-black'
            : 'text-gray-400 hover:text-gold'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all ${
          language === 'zh'
            ? 'bg-gold text-black'
            : 'text-gray-400 hover:text-gold'
        }`}
      >
        中文
      </button>
    </div>
  );
}
