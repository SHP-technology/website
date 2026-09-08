import React from 'react';
import { ShieldCheck, Zap, Lock, Cpu } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: 'Enterprise Code Standards',
      desc: 'Clean, modular, and maintainable TypeScript codebase following strict linting and testing guidelines.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'High Velocity Sprints',
      desc: 'Rapid iteration cycles with bi-weekly working build demos and transparent progress tracking.'
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-500" />,
      title: 'Bank-Grade Security',
      desc: 'OWASP security compliance, encrypted API payloads, and robust authentication integration.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      title: 'Cloud & AI Native',
      desc: 'Architected for seamless cloud scaling on AWS/GCP with optional AI workflow integrations.'
    }
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((pt, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-3"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 w-fit">{pt.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">{pt.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
