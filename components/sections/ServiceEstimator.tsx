'use client';

import React, { useState } from 'react';
import { BaseBadge } from '@/components/common/BaseBadge';
import { BaseButton } from '@/components/common/BaseButton';
import { Calculator, CheckCircle2 } from 'lucide-react';

export const ServiceEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<'web' | 'cloud' | 'ai' | 'full'>('web');
  const [timeline, setTimeline] = useState<'standard' | 'express'>('standard');
  const [support, setSupport] = useState<boolean>(true);

  const baseRates = {
    web: 1500,
    cloud: 2200,
    ai: 2800,
    full: 4500
  };

  const calculatedEstimate = Math.round(
    (baseRates[projectType] * (timeline === 'express' ? 1.3 : 1)) + (support ? 400 : 0)
  );

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Instant Estimator
          </BaseBadge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Interactive Project Budget Estimator
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            Select your requirements below to calculate an estimated project scope and budget range.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                1. Project Scope
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'web', label: 'Web App' },
                  { id: 'cloud', label: 'Cloud & DevOps' },
                  { id: 'ai', label: 'AI Automation' },
                  { id: 'full', label: 'Full Enterprise' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                2. Delivery Velocity
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    timeline === 'standard'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Standard Sprints (4-8 wks)
                </button>
                <button
                  type="button"
                  onClick={() => setTimeline('express')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    timeline === 'express'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Express Sprint (2-4 wks)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="support-toggle"
                checked={support}
                onChange={(e) => setSupport(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
              />
              <label htmlFor="support-toggle" className="text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                Include 6-month SLA Maintenance & Security Patches
              </label>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Calculator className="w-8 h-8 text-amber-400 mb-2" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Estimated Starting Price</span>
            <span className="text-4xl md:text-5xl font-extrabold text-amber-400 my-2">
              ${calculatedEstimate}
            </span>
            <span className="text-xs text-slate-400 mb-6">Subject to final requirements review</span>
            <BaseButton href="/contact" variant="amber" className="w-full">
              Get Detailed Proposal
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};
