import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { BaseBadge } from '@/components/common/BaseBadge';
import { siteConfig } from '@/src/config/site.config';
import { FiClock, FiMapPin } from 'react-icons/fi';
import { PlatformIcon } from '@/components/common/PlatformIcon';
import { JsonLd } from '@/components/common/JsonLd';
import { getCanonicalUrl, buildBreadcrumbSchema } from '@/src/config/schema';

export const metadata: Metadata = {
  title: 'Contact Engineering | Get in Touch',
  description: 'Contact SHP Technology engineering team. Discuss custom software development, cloud infrastructure, AI automation, or request a quote.'
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${getCanonicalUrl('contact')}#webpage`,
    url: getCanonicalUrl('contact'),
    name: 'Contact SHP Technology',
    description: 'Contact SHP Technology engineering team for software development, cloud systems, and AI integration.',
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.site.url,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: siteConfig.contact.supportEmail,
          telephone: siteConfig.contact.phone,
          availableLanguage: ['English', 'Hindi'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: siteConfig.contact.salesEmail,
          telephone: siteConfig.contact.phone,
          availableLanguage: ['English', 'Hindi'],
        },
      ],
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Contact', path: 'contact' },
  ]);

  return (
    <div className="py-16 md:py-24 bg-surface-main text-primaryText relative overflow-hidden">
      <JsonLd data={[contactPageSchema, breadcrumbSchema]} />
      
      

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primaryText tracking-tight mb-6 leading-tight">
            Let's Discuss Your Software Architecture
          </h1>
          <p className="text-secondaryText text-lg md:text-xl leading-relaxed font-normal">
            Have a new project, architectural challenge, or business inquiry? Reach out to our engineering leads directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <aside className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-2xl">
              <h3 className="text-xl font-bold text-primaryText mb-6">Direct Engineering Contact</h3>
              <div className="flex flex-col gap-5">
                <a href={`mailto:${siteConfig.contact.contactEmail}`} className="flex items-center gap-3.5 text-secondaryText hover:text-brand-primary transition-colors group">
                  <span className="p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="email" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">General Contact & Queries</span>
                    <span className="text-sm font-bold text-primaryText group-hover:text-brand-primary">{siteConfig.contact.contactEmail}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.supportEmail}`} className="flex items-center gap-3.5 text-secondaryText hover:text-brand-primary transition-colors group">
                  <span className="p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="email" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">Customer & Tech Support</span>
                    <span className="text-sm font-bold text-primaryText group-hover:text-brand-primary">{siteConfig.contact.supportEmail}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="flex items-center gap-3.5 text-secondaryText hover:text-brand-primary transition-colors group">
                  <span className="p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="email" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">Sales & Business Inquiries</span>
                    <span className="text-sm font-bold text-primaryText group-hover:text-brand-primary">{siteConfig.contact.salesEmail}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.careersEmail}`} className="flex items-center gap-3.5 text-secondaryText hover:text-brand-primary transition-colors group">
                  <span className="p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="email" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">Jobs & Recruitment</span>
                    <span className="text-sm font-bold text-primaryText group-hover:text-brand-primary">{siteConfig.contact.careersEmail}</span>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3.5 text-secondaryText hover:text-brand-primary transition-colors group">
                  <span className="p-3 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="phone" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">Call Direct Line</span>
                    <span className="text-sm font-bold text-primaryText group-hover:text-brand-primary">{siteConfig.contact.phone}</span>
                  </div>
                </a>

                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-secondaryText hover:text-[#25D366] transition-colors group">
                  <span className="p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] inline-flex items-center justify-center transition-transform">
                    <PlatformIcon platform="whatsapp" className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs text-mutedText block font-semibold">WhatsApp Instant Chat</span>
                    <span className="text-sm font-bold text-[#25D366]">Instant Response (&lt;5 mins)</span>
                  </div>
                </a>
              </div>
            </aside>

            <aside className="p-8 rounded-2xl bg-surface-card border border-surface-border shadow-2xl flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-mutedText font-bold uppercase tracking-wider block">Headquarters</span>
                  <span className="text-xs text-secondaryText font-medium">
                    {siteConfig.officeLocation.address}, {siteConfig.officeLocation.city}, {siteConfig.officeLocation.state} {siteConfig.officeLocation.zip}, {siteConfig.officeLocation.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-surface-border">
                <FiClock className="w-5 h-5 text-brand-accent shrink-0" />
                <div>
                  <span className="text-xs text-mutedText font-bold uppercase tracking-wider block">Response SLA</span>
                  <span className="text-xs font-semibold text-brand-accent">Within {siteConfig.contact.responseSLA}</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
