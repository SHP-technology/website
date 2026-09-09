import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/config/site.config';
import { AppLogo } from '@/components/common/AppLogo';
import { ArrowRight } from 'lucide-react';

export const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Custom Software Development', href: '/services/enterprise-software-development' },
    { label: 'Cloud Architecture & DevOps', href: '/services/cloud-architecture-devops' },
    { label: 'AI & Machine Learning Integration', href: '/services/ai-machine-learning-integration' },
    { label: 'Distributed Systems & API Design', href: '/services/distributed-systems-modernization' },
    { label: 'Security & Compliance Audits', href: '/services/cybersecurity-compliance-audit' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio & Work', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Interactive Demos', href: '/demo' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: siteConfig.socials.linkedin },
    { label: 'Instagram', href: siteConfig.socials.instagram },
    { label: 'Facebook', href: siteConfig.socials.facebook },
    { label: 'Twitter', href: siteConfig.socials.twitter },
    { label: 'Indeed Careers', href: siteConfig.socials.indeed },
  ].filter((item) => item.href);

  return (
    <footer className="bg-surface-card text-secondaryText border-t border-surface-border pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent opacity-80" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <AppLogo />
            <p className="text-secondaryText text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-semibold text-brand-primary w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Response SLA: Within 4 Business Hours</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primaryText uppercase tracking-wider mb-4">Engineering Services</h4>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-secondaryText hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primaryText uppercase tracking-wider mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-secondaryText hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primaryText uppercase tracking-wider mb-4">Social & Connect</h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondaryText hover:text-brand-accent transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-mutedText" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mutedText">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Enterprise Code Quality</span>
            <span>•</span>
            <span>Zero Vendor Lock-In</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
