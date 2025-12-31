'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Insights() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="relative py-40 border-t border-gold/10">
      {/* Subtle wave pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 0 0, transparent 0, rgba(201, 169, 97, 0.1) 40px, transparent 80px)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-10 tracking-wide">
          {t.insights.title}
        </h2>
        
        <p className="text-xl font-light text-gray-400 mb-20 max-w-3xl leading-relaxed tracking-wide">
          {t.insights.description}
        </p>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />

        <div className="space-y-10">
          {t.insights.articles.map((article, index) => (
            <article
              key={index}
              className="group relative pl-8 border-l border-gold/15 hover:border-gold/40 transition-all duration-500 py-8 bg-zinc-950/10 hover:bg-zinc-950/30"
            >
              <div className="space-y-5">
                <div className="text-xs font-light text-gold/40 tracking-[0.2em] uppercase">
                  {article.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide group-hover:text-gold/90 transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed tracking-wide">
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
