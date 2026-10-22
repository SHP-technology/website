import React from 'react';
import { BaseButton } from '@/components/common/BaseButton';
import { FiArrowRight, FiShield } from 'react-icons/fi';
import { PlatformIcon } from '@/components/common/PlatformIcon';
import { siteConfig } from '@/src/config/site.config';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-surface-main">
      <div className="container max-w-5xl mx-auto">
        <div className="p-8 md:p-12 text-center bg-surface-card border border-surface-border rounded-2xl shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-surface-border text-xs font-medium text-secondaryText mb-5 cursor-default">
            <FiShield className="w-4 h-4 text-brand-primary" />
            <span>Architecture Review • Transparent Scope • 4-Hour Response SLA</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-primaryText tracking-tight mb-4 max-w-2xl mx-auto leading-snug">
            Ready to Discuss Your Software Platform?
          </h2>

          <p className="text-secondaryText text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Consult directly with our solution architects. We provide clear deliverables, structured milestones, and bi-weekly working demos.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            <BaseButton href="/contact" variant="primary" size="lg" className="group text-sm font-semibold shadow-sm">
              <span>Schedule Free Consultation</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </BaseButton>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-subtle hover:bg-surface-card text-primaryText border border-surface-border font-semibold text-sm shadow-sm transition-all duration-200"
            >
              <PlatformIcon platform="whatsapp" className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-surface-border/60 text-xs font-medium text-mutedText">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-primaryText transition-colors">
              <PlatformIcon platform="email" className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span>•</span>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-primaryText transition-colors">
              <PlatformIcon platform="phone" className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
