import React from 'react';
import { BaseButton } from '@/components/common/BaseButton';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/src/config/site.config';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="glass-cta p-10 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-blue-600/10 border border-amber-500/30 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 max-w-2xl mx-auto">
            Ready to Build Your Next Software Platform?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-8">
            Consult with our engineering leads today. We guarantee transparent pricing, zero technical jargon, and rapid turnarounds.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <BaseButton href="/contact" variant="primary" size="lg" className="group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-base hover:bg-emerald-500/20 transition-all"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
