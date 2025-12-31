'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Insights() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="relative py-32 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
          {t.insights.title}
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed tracking-wide">
          {t.insights.description}
        </p>

        <div className="space-y-8">
          {t.insights.articles.map((article, index) => (
            <article
              key={index}
              className="group relative p-8 border-l-2 border-gold/20 hover:border-gold/60 transition-all duration-300 bg-zinc-950/20 hover:bg-zinc-950/40"
            >
              <div className="space-y-4">
                <div className="text-xs text-gold/60 tracking-widest uppercase">
                  {article.date}
                </div>
                <h3 className="text-2xl text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
