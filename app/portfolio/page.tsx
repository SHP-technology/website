import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';
import { JsonLd } from '@/components/common/JsonLd';
import { portfolioData } from '@/src/data/portfolio';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Delivered Software Platforms',
  description: 'Explore live enterprise platforms, LMS web apps, cloud POS systems, and AI tools engineered by SHP Technology.'
};

export default function PortfolioPage() {
  const portfolioListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SHP Technology Portfolio & Case Studies',
    description: 'Case studies of custom software platforms, cloud architectures, and web applications developed by SHP Technology.',
    itemListElement: portfolioData.map((project, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        url: getCanonicalUrl(`portfolio/${project.slug}`),
        genre: project.industry,
      },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Portfolio', path: 'portfolio' },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[portfolioListSchema, breadcrumbSchema]} />
      

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Engineering Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Proven Client & Open Source Projects
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
