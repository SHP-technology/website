import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap, MessageSquare, Play } from 'lucide-react';
import { BaseButton } from '@/components/common/BaseButton';
import { siteConfig } from '@/src/config/site.config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-sky-500/20 blur-[130px] opacity-80" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[110px]" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Client Guarantee Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 dark:bg-slate-900/80 border border-slate-700/80 text-white mb-8 shadow-xl hover:border-amber-500/60 transition-all cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Unbeatable Value • Bulletproof Security • 4-Hour Response SLA
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 ml-0.5" />
        </div>

        {/* Attention-Grabbing Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 max-w-4xl text-white">
          We Build Enterprise-Grade Software at a{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
            Fraction of standard costs
          </span>
        </h1>

        {/* Client-Centric Subtitle */}
        <p className="text-lg md:text-2xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl">
          From custom web applications & cloud architecture to AI automation engines—we help visionary businesses launch faster, scale reliably, and save up to 60% on development.
        </p>

        {/* High-Converting Action CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16 w-full sm:w-auto">
          <BaseButton href="/contact" variant="primary" size="lg" className="group text-base font-bold shadow-xl shadow-amber-500/20">
            <span>Start Your Project Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BaseButton>

          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl backdrop-blur-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp (Instant)</span>
          </a>

          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl backdrop-blur-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-base border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            <Play className="w-4 h-4 text-amber-400 fill-current" />
            <span>Launch Live Demos</span>
          </Link>
        </div>

        {/* Live Client Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-800/80">
          {[
            { metric: '150+', label: 'Global Clients', detail: 'Trust & Partnerships' },
            { metric: '80+', label: 'Delivered Projects', detail: '100% On-Time Record' },
            { metric: '50+', label: 'Automations Built', detail: 'Saving 1,000+ Hours' },
            { metric: '<4 Hours', label: 'Response Guarantee', detail: 'Direct Engineer SLA' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl flex flex-col items-center text-center glass-card border border-slate-800 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-3xl lg:text-4xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                {stat.metric}
              </span>
              <span className="text-sm font-bold text-slate-200 mt-2">{stat.label}</span>
              <span className="text-xs font-semibold text-emerald-400 mt-1">✓ {stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
