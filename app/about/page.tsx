import type { Metadata } from 'next';
import { fetchTeamMembers } from '@/services/api';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CompanyTimeline } from '@/components/sections/CompanyTimeline';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { siteConfig } from '@/src/config/site.config';
import { Linkedin, Target, Eye, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Leadership & Engineering Story',
  description: 'Learn about SHP Technology, our leadership team, company timeline, and core engineering principles.'
};

export const revalidate = 60;

export default async function AboutPage() {
  const teamMembers = await fetchTeamMembers();

  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            About SHP Technology
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Building High-Performance Software for the <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Next Generation</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Core Values / Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 w-fit mb-6 text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empower enterprise businesses worldwide with high-velocity, clean, and secure software solutions that automate operations and accelerate growth.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 w-fit mb-6 text-sky-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Become a globally recognized engineering powerhouse known for transparent client partnerships, top-tier technical craft, and reliable delivery.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-6 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Guarantee</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Meet the People Behind SHP
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              Experienced software architects, full-stack developers, and project leaders committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id || member.name}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold text-xl mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-4">
                    {member.role}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800">
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github_url && (
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <CompanyTimeline />

        {/* Call to Action Banner */}
        <CtaBanner />
      </div>
    </div>
  );
}
