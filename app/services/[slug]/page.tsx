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
    title: `${service.title} | SHP Engineering Services`,
    description: service.shortDescription
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-accent/10 blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to All Services</span>
        </Link>

        <div className="p-8 md:p-12 rounded-3xl bg-surface-card border border-surface-border shadow-2xl mb-12 relative overflow-hidden">
          <BaseBadge variant="amber" className="mb-4 text-[10px] uppercase tracking-widest">
            {service.category}
          </BaseBadge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed mb-8 max-w-3xl font-normal">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <BaseButton href="/contact" variant="primary" size="lg" className="group shadow-xl font-bold">
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-3xl bg-surface-card border border-rose-500/30 shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-400" />
              The Problem We Solve
            </h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              {service.problemSolved}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-card border border-brand-primary/30 shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              Key Benefits & Business Impact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-4">
              What You Receive (Deliverables)
            </h3>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="text-xs md:text-sm text-secondaryText flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border shadow-xl">
            <h3 className="text-xl font-bold text-primaryText mb-4">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-surface-subtle border border-surface-border text-secondaryText text-xs font-bold"
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
