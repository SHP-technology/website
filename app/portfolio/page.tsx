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
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-accent/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Engineering Portfolio
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Proven Client & <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">Open Source Projects</span>
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed font-normal">
            Real software built for real businesses. Browse live case studies, live online platforms, and technical architecture specifications.
          </p>
        </div>

        <PortfolioSection />
        <CtaBanner />
      </div>
    </div>
  );
}
