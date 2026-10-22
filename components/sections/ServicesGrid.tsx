import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiCloud, FiCode, FiCpu, FiLayout, FiShare2, FiShield } from 'react-icons/fi';
import { servicesData } from '@/src/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <FiCode className="w-6 h-6 text-brand-accent" />,
  Cloud: <FiCloud className="w-6 h-6 text-brand-primary" />,
  Cpu: <FiCpu className="w-6 h-6 text-brand-primary" />,
  Network: <FiShare2 className="w-6 h-6 text-brand-accent" />,
  ShieldCheck: <FiShield className="w-6 h-6 text-brand-accent" />,
  Layout: <FiLayout className="w-6 h-6 text-brand-primary" />
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-surface-main text-primaryText">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primaryText tracking-tight mb-3">
            Bespoke Software Solutions Built for Your Growth
          </h2>
          <p className="text-secondaryText text-base md:text-lg leading-relaxed">
            High-performance full-stack web applications, cloud infrastructure, AI automation engines, and enterprise security built for long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-primary/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-primaryText">
                    {iconMap[service.icon] || <FiCode className="w-5 h-5 text-brand-primary" />}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md bg-surface-subtle text-secondaryText border border-surface-border">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primaryText mb-2 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-secondaryText text-sm leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                <ul className="flex flex-col gap-2 mb-5 pt-4 border-t border-surface-border/60">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="text-xs text-mutedText flex items-start gap-2">
                      <FiCheckCircle className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-surface-subtle text-[11px] font-medium text-secondaryText"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-border/60 text-xs font-semibold text-brand-primary">
                <span>Technical Specifications</span>
                <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
