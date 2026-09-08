import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolio';
import { BaseBadge } from '@/components/common/BaseBadge';

export const PortfolioSection: React.FC = () => {
  const featured = portfolioData.filter((p) => p.featured);

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Selected Works
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Proven Client & Open Source Software
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Explore live platforms, SaaS tools, and open source projects built by SHP Technology engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <BaseBadge variant="blue" className="text-[10px]">
                    {project.industry}
                  </BaseBadge>
                  <span className="text-xs text-slate-400 font-semibold">{project.completionYear}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-xs font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors"
                    title="Visit Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
