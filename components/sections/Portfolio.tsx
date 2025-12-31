'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative py-32 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
          {t.portfolio.title}
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed tracking-wide whitespace-pre-line">
          {t.portfolio.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 bg-zinc-950/30 hover:bg-zinc-950/60"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-xs text-gold/60 mb-4 tracking-widest uppercase">
                  {project.category}
                </div>
                <h3 className="text-xl text-white mb-4 tracking-wide">
                  {project.name}
                </h3>
                <div className="text-sm text-gray-500 tracking-wider">
                  {project.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
