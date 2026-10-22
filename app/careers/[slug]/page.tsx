import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { jobsData } from '@/src/data/jobs';
import { BaseBadge } from '@/components/common/BaseBadge';
import { JobApplyForm } from '@/components/forms/JobApplyForm';
import { FiArrowLeft, FiBriefcase, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/src/config/site.config';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobsData.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobsData.find((j) => j.slug === slug);
  if (!job) return { title: 'Job Role Not Found' };

  return {
    title: `${job.title} | SHP Careers`,
    description: job.shortDescription
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const jobUrl = getCanonicalUrl(`careers/${job.slug}`);

  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `${jobUrl}#job`,
    title: job.title,
    description: `${job.fullDescription} Responsibilities: ${job.responsibilities.join('; ')}. Requirements: ${job.requirements.join('; ')}.`,
    datePosted: '2025-01-01',
    validThrough: '2026-12-31',
    employmentType: job.employmentType.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.site.url,
      logo: `${siteConfig.site.url}assets/logo.svg`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.officeLocation.city,
        addressRegion: siteConfig.officeLocation.state,
        addressCountry: siteConfig.officeLocation.country,
      },
    },
    jobLocationType: job.location.toLowerCase().includes('remote') ? 'TELECOMMUTE' : undefined,
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Global',
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Careers', path: 'careers' },
    { name: job.title, path: `careers/${job.slug}` },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[jobSchema, breadcrumbSchema]} />
      
      

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-accent mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>← Back to All Open Roles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <article className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-2xl mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <BaseBadge variant="amber" className="text-[10px]">
                  {job.department}
                </BaseBadge>
                <span className="text-xs text-secondaryText flex items-center gap-1 font-semibold">
                  <FiMapPin className="w-3.5 h-3.5 text-brand-primary" /> {job.location}
                </span>
                <span className="text-xs text-secondaryText flex items-center gap-1 font-semibold">
                  <FiBriefcase className="w-3.5 h-3.5 text-brand-accent" /> {job.employmentType}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-primaryText mb-4">
                {job.title}
              </h1>

              <p className="text-secondaryText text-base leading-relaxed mb-8 font-normal">
                {job.fullDescription}
              </p>

              <section className="mb-8 pt-6 border-t border-surface-border">
                <h3 className="text-lg font-bold text-primaryText mb-4">Responsibilities</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                      <FiCheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8 pt-6 border-t border-surface-border">
                <h3 className="text-lg font-bold text-primaryText mb-4">Requirements</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                      <FiCheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <section className="pt-6 border-t border-surface-border">
                  <h3 className="text-lg font-bold text-primaryText mb-4">Nice to Have</h3>
                  <ul className="flex flex-col gap-2.5">
                    {job.niceToHave.map((nth, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-mutedText flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mutedText mt-2 shrink-0" />
                        <span>{nth}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </article>
          </div>

          <aside className="lg:col-span-1">
            <JobApplyForm jobTitle={job.title} />
          </aside>
        </div>
      </div>
    </div>
  );
}
