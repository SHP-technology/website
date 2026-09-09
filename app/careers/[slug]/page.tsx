import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { jobsData } from '@/src/data/jobs';
import { BaseBadge } from '@/components/common/BaseBadge';
import { JobApplyForm } from '@/components/forms/JobApplyForm';
import { ArrowLeft, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return jobsData.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = jobsData.find((j) => j.slug === params.slug);
  if (!job) return { title: 'Job Role Not Found' };

  return {
    title: `${job.title} | SHP Careers`,
    description: job.shortDescription
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = jobsData.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to All Open Roles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-surface-card border border-surface-border shadow-2xl mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <BaseBadge variant="amber" className="text-[10px]">
                  {job.department}
                </BaseBadge>
                <span className="text-xs text-secondaryText flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" /> {job.location}
                </span>
                <span className="text-xs text-secondaryText flex items-center gap-1 font-semibold">
                  <Briefcase className="w-3.5 h-3.5 text-brand-accent" /> {job.employmentType}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-primaryText mb-4">
                {job.title}
              </h1>

              <p className="text-secondaryText text-base leading-relaxed mb-8 font-normal">
                {job.fullDescription}
              </p>

              <div className="mb-8 pt-6 border-t border-surface-border">
                <h3 className="text-lg font-bold text-primaryText mb-4">Responsibilities</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 pt-6 border-t border-surface-border">
                <h3 className="text-lg font-bold text-primaryText mb-4">Requirements</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className="pt-6 border-t border-surface-border">
                  <h3 className="text-lg font-bold text-primaryText mb-4">Nice to Have</h3>
                  <ul className="flex flex-col gap-2.5">
                    {job.niceToHave.map((nth, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-mutedText flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mutedText mt-2 shrink-0" />
                        <span>{nth}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <JobApplyForm jobTitle={job.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
