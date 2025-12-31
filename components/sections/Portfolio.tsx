'use client';

import { useLanguage } from '@/lib/i18n/language-context';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative py-40 border-t border-gold/10">
      {/* Diagonal line pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.1) 35px, rgba(201, 169, 97, 0.1) 36px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-10 tracking-wide">
          {t.portfolio.title}
        </h2>
        
        <p className="text-xl font-light text-gray-400 mb-20 max-w-3xl leading-relaxed tracking-wide whitespace-pre-line">
          {t.portfolio.description}
        </p>
        
        {/* Thin divider */}
        <div className="w-12 h-px bg-gold/20 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-10 border border-gold/10 hover:border-gold/25 transition-all duration-500 bg-zinc-950/20 hover:bg-zinc-950/40"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-xs font-light text-gold/40 mb-5 tracking-[0.2em] uppercase">
                  {project.category}
                </div>
                <h3 className="text-xl font-light text-white mb-5 tracking-wide">
                  {project.name}
                </h3>
                <div className="text-sm font-light text-gray-500 tracking-wider">
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
