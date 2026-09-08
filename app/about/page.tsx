import type { Metadata } from 'next';
import { fetchTeamMembers } from '@/services/api';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CompanyTimeline } from '@/components/sections/CompanyTimeline';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { siteConfig } from '@/src/config/site.config';
import { Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Leadership & Story',
  description: 'Learn about SHP Technology, our leadership team, company timeline, and engineering principles.'
};

export const revalidate = 60;

export default async function AboutPage() {
  const teamMembers = await fetchTeamMembers();

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            About SHP Technology
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Building Software for the <span className="text-amber-500">Next Generation</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Empower enterprise businesses worldwide with high-velocity, clean, and secure software solutions that automate operations and accelerate growth.
            </p>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Become a globally recognized engineering powerhouse known for transparent client partnerships, top-tier technical craft, and reliable delivery.
            </p>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Guarantee</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Unbeatable pricing, zero hidden fees, bi-weekly working demos, and ongoing 24/7 post-launch support backed by robust SLAs.
            </p>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Leadership & Engineering
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Meet the People Behind SHP
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              Experienced software architects, developers, and project leaders committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id || member.name}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold text-xl mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-4">
                    {member.role}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800">
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github_url && (
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <CompanyTimeline />

        {/* CTA */}
        <CtaBanner />
      </div>
    </div>
  );
}
