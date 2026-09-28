import React from 'react';
import Link from 'next/link';
import { legalConfig } from '@/src/config/legal.config';

/**
 * Shared presentational shell + primitives for the legal pages
 * (Privacy Policy, Terms, Cookie Policy, Refund Policy) so they stay
 * visually consistent with the rest of the site and with each other.
 */

const legalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

export const LegalShell: React.FC<{
  title: string;
  intro?: string;
  children: React.ReactNode;
}> = ({ title, intro, children }) => {
  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <header className="mb-10 border-b border-surface-border pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-wider text-mutedText">
            Effective date: {legalConfig.effectiveDate} · Last updated: {legalConfig.lastUpdated}
          </p>
          {intro && (
            <p className="text-secondaryText text-base md:text-lg leading-relaxed mt-5">{intro}</p>
          )}
        </header>

        <article className="flex flex-col gap-8">{children}</article>

        <nav
          aria-label="Other legal pages"
          className="mt-16 pt-8 border-t border-surface-border flex flex-wrap gap-3"
        >
          {legalNav
            .filter((l) => l.label.toLowerCase() !== title.toLowerCase())
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-semibold px-4 py-2 rounded-xl border border-surface-border text-secondaryText hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
};

export const LegalSection: React.FC<{ heading: string; children: React.ReactNode; id?: string }> = ({
  heading,
  children,
  id,
}) => (
  <section id={id} className="flex flex-col gap-3 scroll-mt-24">
    <h2 className="text-xl md:text-2xl font-bold text-primaryText">{heading}</h2>
    {children}
  </section>
);

export const LegalP: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-secondaryText text-sm md:text-base leading-relaxed">{children}</p>
);

export const LegalUL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="flex flex-col gap-2 list-disc pl-5 text-secondaryText text-sm md:text-base leading-relaxed marker:text-brand-primary">
    {children}
  </ul>
);

/** Highlighted placeholder marker so unfilled legal values are obvious in review. */
export const LegalTODO: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <mark className="bg-amber-400/20 text-brand-accent font-semibold px-1 rounded not-italic">
    {children}
  </mark>
);
