import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { jobsData } from '@/src/data/jobs';
import { BaseBadge } from '@/components/common/BaseBadge';

export const CareersOverview: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Join Our Engineering Team
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
            Open Positions at SHP Technology
          </h2>
          <p className="text-secondaryText text-base md:text-lg">
            Work on challenging client problems, cutting-edge AI tools, and scalable cloud systems.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="glass-card p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-primary/50 transition-all duration-300"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <BaseBadge variant="blue" className="text-[10px]">
                    {job.department}
                  </BaseBadge>
                  <span className="text-xs text-mutedText flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  <span className="text-xs text-mutedText flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> {job.employmentType}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primaryText mb-2">
                  {job.title}
                </h3>
                <p className="text-secondaryText text-sm leading-relaxed max-w-2xl">
                  {job.shortDescription}
                </p>
              </div>

              <Link
                href={`/careers/${job.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-bold text-sm shrink-0 transition-colors cursor-pointer"
              >
                <span>View Role</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
