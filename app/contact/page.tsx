import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { BaseBadge } from '@/components/common/BaseBadge';
import { siteConfig } from '@/src/config/site.config';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Engineering | Get in Touch',
  description: 'Contact SHP Technology engineering team. Discuss custom software development, cloud infrastructure, AI automation, or request a quote.'
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Get In Touch
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Let's Build Something <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Extraordinary</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
            Have a new project, architectural challenge, or business inquiry? Reach out to our engineering leads directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Direct Engineering Contact</h3>
              <div className="flex flex-col gap-5">
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3.5 text-slate-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Email Founder Directly</span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-400">{siteConfig.contact.email}</span>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3.5 text-slate-300 hover:text-amber-400 transition-colors group">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Call Direct Line</span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-400">{siteConfig.contact.phone}</span>
                  </div>
                </a>

                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-slate-300 hover:text-emerald-400 transition-colors group">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">WhatsApp Instant Chat</span>
                    <span className="text-sm font-bold text-emerald-400">Instant Response (&lt;5 mins)</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Headquarters</span>
                  <span className="text-xs text-slate-300 font-medium">
                    {siteConfig.officeLocation.address}, {siteConfig.officeLocation.city}, {siteConfig.officeLocation.state} {siteConfig.officeLocation.zip}, {siteConfig.officeLocation.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Response Guarantee</span>
                  <span className="text-xs font-semibold text-emerald-400">Within {siteConfig.contact.responseSLA}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
