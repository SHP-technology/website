import type { Metadata } from 'next';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CheckCircle2, Tv, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request Product Demo | Live Interactive Sessions',
  description: 'Book a live interactive demo session of SHP E-Learning LMS, Cloud POS, AI document engines, or custom enterprise apps.'
};

export default function DemoPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Interactive Demo
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Experience Our <span className="text-amber-500">Platforms Live</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Schedule a 1-on-1 walkthrough with an engineering solution lead to test live features, inspect system architecture, and discuss custom integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-500" />
                Live Platforms Demo
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Test our SHP E-Learning platform, Cloud POS software, or RAG AI document engine in real time with sample datasets.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-4">
                What to Expect During the Session:
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  '30-minute tailored platform walkthrough',
                  'Q&A session with an engineering lead',
                  'Custom architecture & integration roadmap',
                  'Transparent pricing and timeline breakdown'
                ].map((item, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
