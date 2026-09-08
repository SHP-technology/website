import type { Metadata } from 'next';
import { CareersOverview } from '@/components/sections/CareersOverview';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';
import { companyCultureValues, hiringProcessSteps } from '@/src/data/jobs';

export const metadata: Metadata = {
  title: 'Careers & Open Roles | Join SHP Technology',
  description: 'Explore open engineering positions at SHP Technology. Build enterprise web applications, cloud systems, and AI tools with remote-first perks.'
};

export default function CareersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Careers at SHP
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Build the Future of <span className="text-amber-500">Software & AI</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            We are hiring talented full-stack engineers, cloud architects, and AI developers. Work with modern tech stacks, competitive pay, and flexible remote hours.
          </p>
        </div>

        {/* Open Positions List */}
        <CareersOverview />

        {/* Culture & Benefits */}
        <div className="my-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Our Values
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Engineering Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCultureValues.map((val, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Hiring Steps
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Our 6-Step Interview Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcessSteps.map((step, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl">
                <span className="text-2xl font-extrabold text-amber-500 block mb-2">{step.step}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
