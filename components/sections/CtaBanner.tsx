import React from 'react';
import { BaseButton } from '@/components/common/BaseButton';
import { ArrowRight, MessageSquare, ShieldCheck, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/src/config/site.config';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative bg-surface-main overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-brand-accent/15 via-surface-card to-brand-primary/15 border border-brand-accent/40 rounded-3xl shadow-2xl backdrop-blur-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-accent/20 blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-subtle border border-surface-border text-xs font-bold text-brand-accent mb-6 shadow-md cursor-default">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span>Free Architecture Review • Upfront Fixed Quote • 4-Hour Response SLA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your Software Platform?
          </h2>

          <p className="text-secondaryText text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Consult directly with our senior software leads. We guarantee transparent fixed pricing, zero technical jargon, and bi-weekly working demos.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <BaseButton href="/contact" variant="primary" size="lg" className="group text-base font-bold shadow-xl">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-surface-border text-xs font-semibold text-mutedText">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-primaryText transition-colors">
              <Mail className="w-4 h-4 text-brand-accent" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span>•</span>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-primaryText transition-colors">
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
