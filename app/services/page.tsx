import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServiceEstimator } from '@/components/sections/ServiceEstimator';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';
import { JsonLd } from '@/components/common/JsonLd';
import { servicesData } from '@/src/data/services';
import { siteConfig } from '@/src/config/site.config';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'Engineering Services | Custom Enterprise Software & Cloud',
  description: 'Explore SHP Technology engineering services: Custom enterprise web apps, cloud DevOps, AI systems integration, microservices, and security audits.'
};

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SHP Technology Engineering Services',
    description: 'Custom enterprise software, cloud architecture, AI solutions, and system modernization services.',
    itemListElement: servicesData.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.shortDescription,
        url: getCanonicalUrl(`services/${s.slug}`),
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.site.url,
        },
      },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Services', path: 'services' },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[serviceListSchema, breadcrumbSchema]} />
      

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Engineering Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            End-to-End Engineering Solutions
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed font-normal">
            We partner with visionary companies to design, build, and deploy production-grade software applications backed by bi-weekly live demos and transparent fixed pricing.
          </p>
        </div>

        <ServicesGrid />
        <ServiceEstimator />
        <MethodologySection />
        <CtaBanner />
      </div>
    </div>
  );
}
