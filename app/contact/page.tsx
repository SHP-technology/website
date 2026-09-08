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
    <div className="py-12 md:py-20">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Get In Touch
          </BaseBadge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Let's Build Something <span className="text-amber-500">Extraordinary</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Have a new project, architectural challenge, or business inquiry? Reach out to our engineering leads directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Direct Contacts</h3>
              <div className="flex flex-col gap-5">
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Email Us</span>
                    <span className="text-sm font-bold">{siteConfig.contact.email}</span>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Call Direct</span>
                    <span className="text-sm font-bold">{siteConfig.contact.phone}</span>
                  </div>
                </a>

                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-emerald-500">Instant Response</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Headquarters</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {siteConfig.officeLocation.address}, {siteConfig.officeLocation.city}, {siteConfig.officeLocation.state} {siteConfig.officeLocation.zip}, {siteConfig.officeLocation.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Response Guarantee</span>
                  <span className="text-xs font-semibold text-emerald-500">Within {siteConfig.contact.responseSLA}</span>
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
