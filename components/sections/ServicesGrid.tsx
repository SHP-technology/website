import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Cloud, Cpu, Network, ShieldCheck, Layout } from 'lucide-react';
import { servicesData } from '@/src/data/services';
import { BaseBadge } from '@/components/common/BaseBadge';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-amber-500" />,
  Cloud: <Cloud className="w-6 h-6 text-amber-500" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-500" />,
  Network: <Network className="w-6 h-6 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-500" />,
  Layout: <Layout className="w-6 h-6 text-amber-500" />
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Engineering Capabilities
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Bespoke Engineering Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            High-performance web software, cloud infrastructure, and AI automation tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group glass-card p-8 rounded-3xl flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon] || <Code2 className="w-6 h-6 text-amber-500" />}
                </div>

                <BaseBadge variant="blue" className="mb-3 text-[10px]">
                  {service.category}
                </BaseBadge>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-amber-500 group-hover:translate-x-1 transition-transform">
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
