import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Delivered Software Platforms',
  description: 'Explore live enterprise platforms, LMS web apps, cloud POS systems, and AI tools engineered by SHP Technology.'
};

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Engineering Portfolio
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Proven Client & <span className="text-amber-500">Open Source Projects</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Real software built for real businesses. Browse live case studies, live platform links, and technical architecture specifications.
          </p>
        </div>

        <PortfolioSection />
        <CtaBanner />
      </div>
    </div>
  );
}
