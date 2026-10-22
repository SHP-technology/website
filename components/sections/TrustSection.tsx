import React from 'react';
import { FiClock, FiCode, FiDollarSign, FiLock, FiShield, FiZap } from 'react-icons/fi';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <FiCode className="w-6 h-6 text-brand-accent" />,
      badge: 'Zero Vendor Lock-In',
      title: '100% Code & IP Ownership',
      desc: 'You own every line of source code, deployment scripts, and intellectual property from Day 1.'
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-brand-primary" />,
      badge: 'No Surprise Charges',
      title: 'Predictable Fixed Milestones',
      desc: 'Clear scope and upfront milestone estimates. No hidden fees or unexpected invoices.'
    },
    {
      icon: <FiZap className="w-6 h-6 text-brand-accent" />,
      badge: 'Rapid Iteration',
      title: 'Bi-Weekly Live Demos',
      desc: 'Watch your software evolve with live working previews every 2 weeks-no black-box delays.'
    },
    {
      icon: <FiLock className="w-6 h-6 text-brand-primary" />,
      badge: 'Bank-Grade Security',
      title: 'OWASP & SOC2 Standards',
      desc: 'Encrypted database fields, secure API gateways, and strict data privacy compliance.'
    },
    {
      icon: <FiShield className="w-6 h-6 text-brand-accent" />,
      badge: 'Direct Communication',
      title: 'Direct Engineering Access',
      desc: 'Work directly with expert solution architects-no middleman account managers.'
    },
    {
      icon: <FiClock className="w-6 h-6 text-brand-primary" />,
      badge: 'Dedicated Support',
      title: '4-Hour Response SLA',
      desc: 'Dedicated post-launch maintenance for rapid resolution of critical issues.'
    }
  ];

  return (
    <section className="py-16 bg-surface-subtle border-y border-surface-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent block mb-2">
            Why Clients Choose SHP Technology
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primaryText tracking-tight">
            Built for Transparency, Speed & Uncompromised Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((pt, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group "
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-2xl bg-surface-subtle border border-surface-border inline-flex items-center justify-center transition-transform">
                    {pt.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-subtle text-secondaryText border border-surface-border">
                    {pt.badge}
                  </span>
                </div>
                <h3 className="font-bold text-primaryText text-lg mb-2 group-hover:text-brand-accent transition-colors">
                  {pt.title}
                </h3>
                <p className="text-secondaryText text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
