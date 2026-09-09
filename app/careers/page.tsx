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
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Careers at SHP
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Build the Future of <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Software & AI</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
            We are hiring talented full-stack engineers, cloud architects, and AI developers. Work with modern tech stacks, competitive pay, and flexible remote hours.
          </p>
        </div>

        {/* Open Positions List */}
        <CareersOverview />

        {/* Culture & Benefits */}
        <div className="my-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Our Core Values
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Engineering Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCultureValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Our Transparent Interview Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcessSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                <span className="text-2xl font-extrabold text-amber-400 block mb-2">{step.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
