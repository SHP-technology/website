import { fetchFaqs, fetchTestimonials } from '@/services/api';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BaseBadge } from '@/components/common/BaseBadge';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/src/config/site.config';
import { getCanonicalUrl } from '@/src/config/schema';

export const revalidate = 60; // Incremental Static Revalidation (ISR) every 60 seconds

export default async function HomePage() {
  const [faqs, testimonials] = await Promise.all([
    fetchFaqs(),
    fetchTestimonials()
  ]);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${getCanonicalUrl()}#website`,
    url: getCanonicalUrl(),
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.site.url}#organization`,
    },
    inLanguage: 'en-US',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[websiteSchema, faqSchema]} />
      <HeroSection />
      <TrustSection />
      <ServicesGrid />
      <MethodologySection />
      <TechStackSection />
      <PortfolioSection />
      <TestimonialsSection testimonials={testimonials} />

      <section className="py-20 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-secondaryText text-base md:text-lg">
              Got questions about our technical stack, process, pricing, or support? We've got answers.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
