import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiAward, FiPlay } from 'react-icons/fi';
import { PlatformIcon } from '@/components/common/PlatformIcon';
import { BaseButton } from '@/components/common/BaseButton';
import { siteConfig } from '@/src/config/site.config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-surface-main text-primaryText">
      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-surface-border text-primaryText mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-secondaryText">
            Production Software • Dedicated Engineering • 4-Hour Response SLA
          </span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl text-primaryText">
          We Build Custom Software, Cloud Platforms & Scalable Systems
        </h1>

        <p className="text-lg md:text-xl text-secondaryText font-normal leading-relaxed mb-10 max-w-2xl">
          From full-stack web applications and microservices to secure cloud infrastructure. We partner with companies to engineer resilient, production-ready software.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3.5 mb-16 w-full sm:w-auto">
          <BaseButton href="/contact" variant="primary" size="lg" className="group text-sm font-semibold shadow-md">
            <span>Schedule Consultation</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </BaseButton>

          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-card hover:bg-surface-subtle text-primaryText border border-surface-border font-semibold text-sm shadow-sm transition-all duration-200"
          >
            <PlatformIcon platform="whatsapp" className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-card text-secondaryText font-semibold text-sm border border-surface-border hover:text-primaryText hover:border-brand-primary transition-all duration-200"
          >
            <FiPlay className="w-3.5 h-3.5 text-brand-primary fill-current" />
            <span>Explore Demos</span>
          </Link>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-surface-border">
          {[
            { metric: '150+', label: 'Global Clients', detail: 'Long-term client trust' },
            { metric: '80+', label: 'Delivered Projects', detail: 'Verified production systems' },
            { metric: '50+', label: 'Automations Built', detail: 'Workflow engines' },
            { metric: '<4 Hours', label: 'Response SLA', detail: 'Direct technical response' }
          ].map((stat, idx) => (
            <article
              key={idx}
              className="p-5 rounded-2xl flex flex-col items-center text-center bg-surface-card border border-surface-border hover:border-brand-primary/40 transition-colors duration-200"
            >
              <span className="text-3xl font-extrabold text-primaryText">
                {stat.metric}
              </span>
              <span className="text-sm font-semibold text-secondaryText mt-1.5">{stat.label}</span>
              <span className="text-xs text-mutedText mt-1">{stat.detail}</span>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};
