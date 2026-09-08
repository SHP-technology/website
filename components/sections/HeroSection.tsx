import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BaseButton } from '@/components/common/BaseButton';
import { siteConfig } from '@/src/config/site.config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up relative z-10">
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="uppercase tracking-wider">Unbeatable Quality • Fast Delivery • Enterprise Reliable</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6 max-w-3xl">
          Ship Premium Custom Software at a <span className="text-emerald-500 dark:text-emerald-400">Fraction of the Cost</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
          Get enterprise-grade web apps, cloud infrastructure, and AI tools built with unmatched speed and bulletproof reliability—without breaking your budget.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 w-full sm:w-auto">
          <BaseButton href="/contact" variant="primary" size="lg" className="group">
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BaseButton>

          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl backdrop-blur-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-base hover:bg-emerald-500/20 transition-all duration-200 shadow-sm"
          >
            <span>💬 Chat on WhatsApp</span>
          </a>

          <BaseButton href="/portfolio" variant="outline" size="lg">
            Explore Our Work
          </BaseButton>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200/80 dark:border-slate-800">
          {siteConfig.metrics.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl flex flex-col items-center group hover:-translate-y-1 transition-all duration-200 backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-lg"
            >
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none group-hover:text-amber-500 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1.5">
                {stat.label}
              </span>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                → {stat.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
