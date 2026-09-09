import React from 'react';
import { ShieldCheck, Zap, Lock, DollarSign, Clock, Code2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      badge: 'Zero Vendor Lock-In',
      title: '100% Code & IP Ownership',
      desc: 'You own every line of source code, deployment scripts, and intellectual property from Day 1.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      badge: 'No Surprise Charges',
      title: 'Transparent Fixed Pricing',
      desc: 'Clear scope and upfront fixed-rate milestones. No hidden fees or unexpected invoices.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      badge: 'Rapid Iteration',
      title: 'Bi-Weekly Live Demos',
      desc: 'Watch your software evolve with live working previews every 2 weeks—no black-box delays.'
    },
    {
      icon: <Lock className="w-6 h-6 text-sky-400" />,
      badge: 'Bank-Grade Security',
      title: 'OWASP & SOC2 Standards',
      desc: 'Encrypted database fields, secure API gateways, and strict data privacy compliance.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      badge: 'Direct Communication',
      title: 'Direct Engineering Access',
      desc: 'Work directly with expert solution architects—no middleman account managers.'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      badge: 'Dedicated Support',
      title: '4-Hour Response SLA',
      desc: 'Dedicated post-launch maintenance guarantees rapid resolution for critical issues.'
    }
  ];

  return (
    <section className="py-16 bg-slate-900/60 border-y border-slate-800/80">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-2">
            Why Clients Choose SHP Technology
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Built for Transparency, Speed & Uncompromised Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((pt, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {pt.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {pt.badge}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
