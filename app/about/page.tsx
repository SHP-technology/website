import type { Metadata } from 'next';
import { fetchTeamMembers } from '@/services/api';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CompanyTimeline } from '@/components/sections/CompanyTimeline';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { siteConfig } from '@/src/config/site.config';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { PlatformIcon } from '@/components/common/PlatformIcon';

export const metadata: Metadata = {
  title: 'About Us | Leadership & Engineering Story',
  description: 'Learn about SHP Technology, our leadership team, company timeline, and core engineering principles.'
};

export const revalidate = 60;

export default async function AboutPage() {
  const teamMembers = await fetchTeamMembers();

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-accent/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            About SHP Technology
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Building High-Performance Software for the <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">Next Generation</span>
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-brand-accent/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border w-fit mb-6 text-brand-accent">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Mission</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Empower enterprise businesses worldwide with high-velocity, clean, and secure software solutions that automate operations and accelerate growth.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-brand-primary/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border w-fit mb-6 text-brand-primary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Vision</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Become a globally recognized engineering powerhouse known for transparent client partnerships, top-tier technical craft, and reliable delivery.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-brand-accent/40 shadow-xl transition-all duration-300">
            <div className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border w-fit mb-6 text-brand-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Guarantee</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Unbeatable pricing, zero hidden fees, bi-weekly working demos, and ongoing 24/7 post-launch support backed by robust SLAs.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Leadership & Engineering
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
              Meet the People Behind SHP
            </h2>
            <p className="text-secondaryText text-base md:text-lg">
              Experienced software architects, full-stack developers, and project leaders committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id || member.name}
                className="p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-brand-accent/50 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-accentHover flex items-center justify-center text-brand-buttonText font-extrabold text-xl mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform">
                    {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-primaryText mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-4">
                    {member.role}
                  </span>
                  <p className="text-secondaryText text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-surface-border">
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-surface-subtle text-secondaryText hover:text-[#0A66C2] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <PlatformIcon platform="linkedin" className="w-4 h-4" />
                    </a>
                  )}
                  {member.github_url && (
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-surface-subtle text-secondaryText hover:text-primaryText transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <PlatformIcon platform="github" className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CompanyTimeline />
        <CtaBanner />
      </div>
    </div>
  );
}
