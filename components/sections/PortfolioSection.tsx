import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '@/src/data/portfolio';
import { BaseBadge } from '@/components/common/BaseBadge';

export const PortfolioSection: React.FC = () => {
  const featured = portfolioData.filter((p) => p.featured);

  return (
    <section className="py-20 relative bg-surface-main">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primaryText tracking-tight mb-3">
            Delivered Software & Production Case Studies
          </h2>
          <p className="text-secondaryText text-base md:text-lg">
            Explore live platforms, SaaS tools, and applications built by SHP Technology engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-surface-card border border-surface-border shadow-sm hover:border-brand-primary/50 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold text-brand-primary bg-surface-subtle px-2.5 py-0.5 rounded-md border border-surface-border">
                    {project.industry}
                  </span>
                  <span className="text-xs text-mutedText font-medium">{project.completionYear}</span>
                </div>

                <h3 className="text-lg font-bold text-primaryText mb-2">
                  {project.title}
                </h3>

                <p className="text-secondaryText text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-surface-subtle border border-surface-border/50 text-[11px] font-medium text-secondaryText"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-border/60">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-xs font-semibold text-brand-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-surface-subtle border border-surface-border text-secondaryText hover:text-brand-primary transition-colors"
                    title="Visit Live Application"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
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
