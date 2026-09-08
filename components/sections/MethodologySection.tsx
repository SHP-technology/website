import React from 'react';
import { BaseBadge } from '@/components/common/BaseBadge';

export const MethodologySection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Discovery & Planning', desc: 'Detailed requirement analysis, domain modeling, and technical spec alignment.' },
    { num: '02', title: 'Architecture & UX Design', desc: 'Designing interactive wireframes, component design systems, and database schemas.' },
    { num: '03', title: 'Agile Development', desc: 'Bi-weekly sprint iterations delivering clean, typed code with automated test coverage.' },
    { num: '04', title: 'Testing & Hardening', desc: 'End-to-end security audits, load benchmarks, and automated QA verification.' },
    { num: '05', title: 'Cloud Deployment', desc: 'Zero-downtime CI/CD release to production with automated monitoring.' },
    { num: '06', title: '24/7 SLA Support', desc: 'Continuous performance monitoring, security patches, and scaling support.' }
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Engineering Process
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Our 6-Step Development Workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Structured execution ensuring predictable delivery, bulletproof quality, and zero surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md relative flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div>
                <span className="text-4xl font-extrabold text-amber-500/40 dark:text-amber-400/30 group-hover:text-amber-500 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
