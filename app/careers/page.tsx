import type { Metadata } from 'next';
import { CareersOverview } from '@/components/sections/CareersOverview';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';
import { companyCultureValues, hiringProcessSteps, jobsData } from '@/src/data/jobs';
import { JsonLd } from '@/components/common/JsonLd';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'Careers & Open Roles | Join SHP Technology',
  description: 'Explore open engineering positions at SHP Technology. Build enterprise web applications, cloud systems, and AI tools with remote-first perks.'
};

export default function CareersPage() {
  const careersListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SHP Technology Open Positions',
    description: 'Explore open engineering positions and technical careers at SHP Technology.',
    itemListElement: jobsData.map((job, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'JobPosting',
        title: job.title,
        description: job.shortDescription,
        url: getCanonicalUrl(`careers/${job.slug}`),
        employmentType: job.employmentType.toUpperCase().replace('-', '_'),
      },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Careers', path: 'careers' },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[careersListSchema, breadcrumbSchema]} />
      
      

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Careers at SHP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Build Production Software & Cloud Infrastructure
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed font-normal">
            We are hiring talented full-stack engineers, cloud architects, and AI developers. Work with modern tech stacks, competitive pay, and flexible remote hours.
          </p>
        </div>

        {/* Open Positions List */}
        <CareersOverview />

        {/* Culture & Benefits */}
        <div className="my-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Our Core Values
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
              Engineering Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCultureValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-primary/40 shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-primaryText mb-2">{val.title}</h3>
                <p className="text-xs text-mutedText leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Hiring Steps
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
              Our Transparent Interview Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcessSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-surface-border shadow-xl">
                <span className="text-2xl font-extrabold text-brand-primary block mb-2">{step.step}</span>
                <h3 className="text-lg font-bold text-primaryText mb-2">{step.title}</h3>
                <p className="text-xs text-mutedText leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
