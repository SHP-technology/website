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
  if (!job) return { title: 'Job Not Found' };

  return {
    title: `${job.title} | Careers`,
    description: job.shortDescription
  };
}

export default function JobDetailPage({ params }: Props) {
  const job = jobsData.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Open Roles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-3xl mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <BaseBadge variant="blue" className="text-[10px]">
                  {job.department}
                </BaseBadge>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5" /> {job.employmentType}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                {job.title}
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                {job.fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Responsibilities</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Requirements</h3>
                <ul className="flex flex-col gap-2.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Nice to Have</h3>
                  <ul className="flex flex-col gap-2.5">
                    {job.niceToHave.map((nth, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2" />
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
