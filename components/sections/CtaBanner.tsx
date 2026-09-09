import React from 'react';
import { BaseButton } from '@/components/common/BaseButton';
import { ArrowRight, MessageSquare, ShieldCheck, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/src/config/site.config';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-amber-500/15 via-slate-900 to-emerald-500/15 border border-amber-500/40 rounded-3xl shadow-2xl backdrop-blur-2xl">
          {/* Ambient orb backdrop */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500/20 blur-[100px] pointer-events-none" />

          {/* Guarantees Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-amber-400 mb-6 shadow-md cursor-default">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Free Architecture Review • Upfront Fixed Quote • 4-Hour Response SLA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your Software Platform?
          </h2>

          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Consult directly with our senior software leads. We guarantee transparent fixed pricing, zero technical jargon, and bi-weekly working demos.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <BaseButton href="/contact" variant="primary" size="lg" className="group text-base font-bold shadow-xl shadow-amber-500/20">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-800/80 text-xs font-semibold text-slate-400">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span>•</span>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
