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

export const revalidate = 60; // Incremental Static Revalidation (ISR) every 60 seconds

export default async function HomePage() {
  const [faqs, testimonials] = await Promise.all([
    fetchFaqs(),
    fetchTestimonials()
  ]);

  return (
    <>
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
            <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
              Frequently Asked Questions
            </BaseBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
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
