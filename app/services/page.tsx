import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServiceEstimator } from '@/components/sections/ServiceEstimator';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';

export const metadata: Metadata = {
  title: 'Engineering Services | Enterprise Software & Cloud',
  description: 'Explore SHP Technology engineering services: Custom enterprise web apps, cloud DevOps, AI integration, microservices architecture, and security audits.'
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Our Capabilities
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            End-to-End <span className="text-amber-500">Engineering Solutions</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            We partner with businesses to design, build, and deploy production-grade software applications tailored to complex operational needs.
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
