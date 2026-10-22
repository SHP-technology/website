import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/src/data/services';
import { BaseBadge } from '@/components/common/BaseBadge';
import { BaseButton } from '@/components/common/BaseButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiShield, FiZap } from 'react-icons/fi';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/src/config/site.config';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | SHP Engineering Services`,
    description: service.shortDescription
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = getCanonicalUrl(`services/${service.slug}`);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.title,
    description: service.fullDescription,
    serviceType: service.category,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.site.url,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
        position: idx + 1,
      })),
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Services', path: 'services' },
    { name: service.title, path: `services/${service.slug}` },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>← Back to All Services</span>
        </Link>

        <header className="p-8 md:p-12 rounded-2xl bg-surface-card border border-surface-border shadow-2xl mb-12 relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">{service.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-secondaryText text-base md:text-lg leading-relaxed mb-8 max-w-3xl font-normal">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <BaseButton href="/contact" variant="primary" size="lg" className="group shadow-xl font-bold">
              <span>Inquire About {service.title}</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="p-8 rounded-2xl bg-surface-card border border-rose-500/30 shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-3 flex items-center gap-2">
              <FiZap className="w-5 h-5 text-rose-400" />
              The Problem We Solve
            </h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              {service.problemSolved}
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-surface-card border border-brand-primary/30 shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-3 flex items-center gap-2">
              <FiShield className="w-5 h-5 text-brand-primary" />
              Key Benefits & Business Impact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                  <FiCheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <article className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-4">
              What You Receive (Deliverables)
            </h3>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-4">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-surface-subtle border border-surface-border text-secondaryText text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </section>

        <CtaBanner />
      </div>
    </div>
  );
}
