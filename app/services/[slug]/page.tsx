import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/src/data/services';
import { BaseBadge } from '@/components/common/BaseBadge';
import { BaseButton } from '@/components/common/BaseButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Engineering Services`,
    description: service.shortDescription
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Header */}
        <div className="glass-card p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden">
          <BaseBadge variant="amber" className="mb-4 text-[10px] uppercase tracking-widest">
            {service.category}
          </BaseBadge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <BaseButton href="/contact" variant="primary" size="lg">
              Inquire About {service.title}
              <ArrowRight className="w-5 h-5" />
            </BaseButton>
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-3xl border-rose-500/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-500" />
              The Problem We Solve
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {service.problemSolved}
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border-emerald-500/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Key Benefits & Impact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              What You Receive (Deliverables)
            </h3>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
