import type { Metadata } from 'next';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CheckCircle2, Tv, ExternalLink, GraduationCap, UtensilsCrossed } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request Product Demo | Live Interactive Sessions & Live Apps',
  description: 'Launch live interactive demos of SHP E-Learning LMS, Restro POS, AI document engines, or schedule a guided custom demo.'
};

export default function DemoPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Interactive Product Demos
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Explore & Launch Our <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Live Platforms</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
            Test and interact with our live software applications immediately online, or request a guided walkthrough with an engineering solution lead below.
          </p>
        </div>

        {/* Featured Live Product Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* E-Learning Demo Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-amber-500/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" /> EdTech & LMS
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Online
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                🎓 SHP E-Learning Platform
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Full-featured cloud learning management system with course catalogs, student portals, video lessons, quiz attempts, and automated certificates.
              </p>
            </div>
            <a
              href="https://elearning.shptechnology.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-amber-500/20"
            >
              <span>Launch E-Learning Demo 🚀</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Restro POS Demo Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-sky-500/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5" /> Hospitality & POS
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Online
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                🍽️ SHP Restro POS System
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Modern cloud-based restaurant POS and order management web system featuring real-time menu tracking, table ordering, and kitchen workflows.
              </p>
            </div>
            <a
              href="https://restro.shptechnology.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-sky-500/20"
            >
              <span>Launch Restro POS Demo 🚀</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Guided Walkthrough Request Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
            Request a Live Guided Walkthrough
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Want a customized demo tuned to your exact business requirements, database needs, and enterprise architecture? Book a guided session below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-400" />
                Live Engineering Session
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Test custom modules, inspect API response speeds, or discuss bespoke feature integration directly with our team.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              <h4 className="font-bold text-white text-base mb-4">
                What to Expect During the Session:
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  '30-minute tailored platform walkthrough',
                  'Q&A session with an engineering solution lead',
                  'Custom architecture & integration roadmap',
                  'Transparent pricing and timeline breakdown'
                ].map((item, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-slate-300 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
