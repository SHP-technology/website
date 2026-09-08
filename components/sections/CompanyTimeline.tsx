import React from 'react';
import { BaseBadge } from '@/components/common/BaseBadge';

export const CompanyTimeline: React.FC = () => {
  const milestones = [
    { year: '2019', title: 'Company Founded', desc: 'Started in Jabalpur with a mission to deliver top-tier enterprise web solutions.' },
    { year: '2021', title: 'Expanded Cloud Services', desc: 'Scaled into Kubernetes infrastructure, DevOps automation, and multi-cloud management.' },
    { year: '2023', title: 'AI & Data Integration', desc: 'Integrated LLM agents, vector databases, and automated document processing tools.' },
    { year: '2026', title: 'Global Operations', desc: 'Delivered 80+ enterprise projects and 50+ automations for clients across 20+ industries.' }
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Company Journey
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Our Track Record & Milestones
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            From a local development studio to an enterprise software & AI engineering firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-slate-200/80 dark:border-slate-800"
            >
              <div>
                <span className="text-3xl font-extrabold text-amber-500 block mb-2">{m.year}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
