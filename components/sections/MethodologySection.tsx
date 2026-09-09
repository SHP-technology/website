import React from 'react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Fixed Scope',
      badge: 'Day 1 - 3',
      desc: 'We analyze your requirements, define explicit architecture specs, and provide an upfront fixed-rate quotation with zero surprise costs.'
    },
    {
      num: '02',
      title: 'Architecture & UX Wireframes',
      badge: 'Week 1',
      desc: 'Interactive Figma design systems, database schema modeling, and API contract specs aligned before writing code.'
    },
    {
      num: '03',
      title: 'Agile Sprints & Live Demos',
      badge: 'Bi-Weekly',
      desc: 'High-velocity sprint releases. Test live working builds every 2 weeks to provide immediate feedback and shape the product.'
    },
    {
      num: '04',
      title: 'Security & QA Hardening',
      badge: 'Pre-Launch',
      desc: 'Comprehensive OWASP security scanning, database indexing, stress load tests, and multi-browser accessibility verification.'
    },
    {
      num: '05',
      title: 'Zero-Downtime Deployment',
      badge: 'Production Launch',
      desc: 'Automated CI/CD deployment pipelines on Cloudflare / AWS / GCP edge servers with automated domain SSL & CDN caching.'
    },
    {
      num: '06',
      title: '24/7 SLA & Maintenance',
      badge: 'Post-Launch',
      desc: 'Dedicated 4-hour response SLA support, automated backups, continuous security patches, and scalable feature expansion.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-3">
            Predictable Engineering Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Deliver Your Software Project
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Our structured 6-step methodology guarantees bi-weekly progress visibility, bulletproof code quality, and on-time launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-amber-400 group-hover:scale-110 transition-transform">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
