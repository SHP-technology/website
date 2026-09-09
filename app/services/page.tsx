import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServiceEstimator } from '@/components/sections/ServiceEstimator';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';

export const metadata: Metadata = {
  title: 'Engineering Services | Custom Enterprise Software & Cloud',
  description: 'Explore SHP Technology engineering services: Custom enterprise web apps, cloud DevOps, AI systems integration, microservices, and security audits.'
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient glow backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Engineering Capabilities
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            End-to-End <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Engineering Solutions</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
            We partner with visionary companies to design, build, and deploy production-grade software applications backed by bi-weekly live demos and transparent fixed pricing.
          </p>
        </div>

        <ServicesGrid />
        <ServiceEstimator />
        <MethodologySection />
        <CtaBanner />
      </div>
    </div>
  );
}
