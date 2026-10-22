import type { Metadata } from 'next';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { BaseBadge } from '@/components/common/BaseBadge';
import { FiBook, FiCheckCircle, FiCoffee, FiExternalLink, FiTv } from 'react-icons/fi';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/src/config/site.config';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'Request Product Demo | Live Interactive Sessions & Live Apps',
  description: 'Launch live interactive demos of SHP E-Learning LMS, Restro POS, AI document engines, or schedule a guided custom demo.'
};

export default function DemoPage() {
  const demoUrl = getCanonicalUrl('demo');

  const demoPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${demoUrl}#webpage`,
    url: demoUrl,
    name: 'SHP Technology Product Demos & Guided Sessions',
    description: 'Launch live interactive demos of SHP E-Learning LMS and Restro POS, or schedule a guided walkthrough.',
    mainEntity: [
      {
        '@type': 'SoftwareApplication',
        name: 'SHP E-Learning Platform',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web, Cloud',
        url: 'https://elearning.shptechnology.online/',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'SHP Restro POS System',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Cloud',
        url: 'https://restro.shptechnology.online/',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Live Demos', path: 'demo' },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[demoPageSchema, breadcrumbSchema]} />
      
      

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Interactive Product Demos
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Explore & Launch Our Production Demos
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed font-normal">
            Test and interact with our live software applications immediately online, or request a guided walkthrough with an engineering solution lead below.
          </p>
        </div>

        {/* Featured Live Product Demos Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* E-Learning Demo Card */}
          <article className="p-6 md:p-8 rounded-2xl bg-surface-card border border-surface-border shadow-2xl flex flex-col justify-between hover:border-brand-primary/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 flex items-center gap-1.5">
                  <FiBook className="w-3.5 h-3.5" /> EdTech & LMS
                </span>
                <span className="text-xs font-semibold text-brand-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  Live Online
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primaryText mb-2 group-hover:text-brand-primary transition-colors">
                SHP E-Learning Platform
              </h3>
              <p className="text-sm text-secondaryText leading-relaxed mb-6">
                Comprehensive cloud learning management system with course catalogs, student portals, video lessons, quiz attempts, and automated certificates.
              </p>
            </div>
            <a
              href="https://elearning.shptechnology.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-bold text-sm transition-all shadow-xl shadow-brand-primary/20"
            >
              <span>Launch E-Learning Platform Demo</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </article>

          {/* Restro POS Demo Card */}
          <article className="p-6 md:p-8 rounded-2xl bg-surface-card border border-surface-border shadow-2xl flex flex-col justify-between hover:border-brand-accent/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-accent/10 text-brand-accent border border-brand-accent/20 flex items-center gap-1.5">
                  <FiCoffee className="w-3.5 h-3.5" /> Hospitality & POS
                </span>
                <span className="text-xs font-semibold text-brand-primary flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  Live Online
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primaryText mb-2 group-hover:text-brand-accent transition-colors">
                SHP Restro POS System
              </h3>
              <p className="text-sm text-secondaryText leading-relaxed mb-6">
                Modern cloud-based restaurant POS and order management web system featuring real-time menu tracking, table ordering, and kitchen workflows.
              </p>
            </div>
            <a
              href="https://restro.shptechnology.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-accent hover:bg-brand-primary text-brand-buttonText font-bold text-sm transition-all shadow-xl shadow-brand-accent/20"
            >
              <span>Launch Restro POS Demo</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </article>
        </section>

        {/* Guided Walkthrough Request Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-primaryText tracking-tight mb-3">
            Request a Live Guided Walkthrough
          </h2>
          <p className="text-secondaryText text-sm max-w-xl mx-auto">
            Want a customized demo tuned to your exact business requirements, database needs, and enterprise architecture? Book a guided session below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <article className="p-6 rounded-2xl bg-surface-subtle border border-surface-border">
              <h3 className="text-xl font-bold text-primaryText mb-2 flex items-center gap-2">
                <FiTv className="w-5 h-5 text-brand-primary" />
                Live Engineering Session
              </h3>
              <p className="text-secondaryText text-sm leading-relaxed">
                Test custom modules, inspect API response speeds, or discuss bespoke module integration directly with our team.
              </p>
            </article>

            <article className="p-6 rounded-2xl bg-surface-card border border-surface-border shadow-xl">
              <h4 className="font-bold text-primaryText text-base mb-4">
                What to Expect During the Session:
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  '30-minute tailored platform walkthrough',
                  'Q&A session with an engineering solution lead',
                  'Custom architecture & integration roadmap',
                  'Transparent milestone and timeline breakdown'
                ].map((item, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-center gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
