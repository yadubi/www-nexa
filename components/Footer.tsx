'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-gold/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
