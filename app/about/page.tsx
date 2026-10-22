import type { Metadata } from 'next';
import { fetchTeamMembers } from '@/services/api';
import { BaseBadge } from '@/components/common/BaseBadge';
import { CompanyTimeline } from '@/components/sections/CompanyTimeline';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { siteConfig } from '@/src/config/site.config';
import { FiEye, FiShield, FiTarget } from 'react-icons/fi';
import { PlatformIcon } from '@/components/common/PlatformIcon';
import { JsonLd } from '@/components/common/JsonLd';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'About Us | Leadership & Engineering Story',
  description: 'Learn about SHP Technology, our leadership team, company timeline, and core engineering principles.'
};

export const revalidate = 60;

export default async function AboutPage() {
  const teamMembers = await fetchTeamMembers();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${getCanonicalUrl('about')}#webpage`,
    url: getCanonicalUrl('about'),
    name: 'About Us | SHP Technology',
    description: 'Learn about SHP Technology, our leadership team, company timeline, and core engineering principles.',
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.site.url,
      foundingDate: siteConfig.founded,
      description: siteConfig.description,
      member: teamMembers.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        ...(member.linkedin_url ? { sameAs: [member.linkedin_url] } : {}),
      })),
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'About Us', path: 'about' },
  ]);

  return (
    <div className="py-16 md:py-20 bg-surface-main text-primaryText">
      <JsonLd data={[aboutSchema, breadcrumbSchema]} />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">About SHP Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Engineering Resilient Enterprise Software & Scalable Architectures
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <article className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-sm transition-all duration-300">
            <span className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border inline-flex items-center justify-center mb-6 text-brand-accent">
              <FiTarget className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Mission</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Equip businesses worldwide with high-velocity, clean, and secure software solutions that automate operations and accelerate growth.
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-primary/40 shadow-xl transition-all duration-300">
            <span className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border inline-flex items-center justify-center mb-6 text-brand-primary">
              <FiEye className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Vision</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Become a globally recognized engineering powerhouse known for transparent client partnerships, top-tier technical craft, and reliable delivery.
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-sm transition-all duration-300">
            <span className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border inline-flex items-center justify-center mb-6 text-brand-accent">
              <FiShield className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold text-primaryText mb-3">Our Commitment</h3>
            <p className="text-secondaryText text-sm leading-relaxed">
              Competitive, clear milestone contracts with no hidden fees, bi-weekly working demos, and responsive post-launch support with strict SLAs.
            </p>
          </article>
        </section>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Leadership & Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
              Meet the People Behind SHP
            </h2>
            <p className="text-secondaryText text-base md:text-lg">
              Experienced software architects, full-stack developers, and project leaders committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.id || member.name}
                className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="w-16 h-16 rounded-2xl from-brand-accent to-brand-accentHover flex items-center justify-center text-brand-buttonText font-extrabold text-xl mb-6 shadow-lg shadow-brand-accent/20 transition-transform">
                    {member.initials || member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
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

                <footer className="flex items-center gap-3 pt-6 mt-6 border-t border-surface-border">
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
                </footer>
              </article>
            ))}
          </div>
        </div>

        <CompanyTimeline />
        <CtaBanner />
      </div>
    </div>
  );
}
