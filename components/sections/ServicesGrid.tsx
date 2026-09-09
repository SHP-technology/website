import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Cloud, Cpu, Network, ShieldCheck, Layout, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/src/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-amber-400" />,
  Cloud: <Cloud className="w-6 h-6 text-sky-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  Network: <Network className="w-6 h-6 text-purple-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Layout: <Layout className="w-6 h-6 text-indigo-400" />
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-3">
            Core Engineering Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bespoke Software Solutions Tailored to Your Growth
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            High-performance full-stack web applications, cloud infrastructure, AI automation engines, and enterprise security built for long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80 group-hover:scale-110 transition-transform">
                    {iconMap[service.icon] || <Code2 className="w-6 h-6 text-amber-400" />}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Benefits Bullets */}
                <ul className="flex flex-col gap-2 mb-6 pt-4 border-t border-slate-800">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
