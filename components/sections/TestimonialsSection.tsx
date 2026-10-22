import React from 'react';
import { ApiTestimonial } from '@/services/api';
import { testimonialsData } from '@/src/data/testimonials';
import { BaseBadge } from '@/components/common/BaseBadge';
import { FiMessageSquare, FiStar } from 'react-icons/fi';

interface TestimonialsSectionProps {
  testimonials?: ApiTestimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials
}) => {
  const displayList = testimonials && testimonials.length > 0
    ? testimonials
    : testimonialsData.map((t) => ({
        id: t.id,
        name: t.author,
        role: t.role,
        company: t.company,
        quote: t.quote,
        rating: 5,
        order: 1
      }));

  return (
    <section className="py-20 bg-surface-subtle/40 border-y border-surface-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-2">Verified Partner Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
            Partner Feedback &amp; Project Outcomes
          </h2>
          <p className="text-secondaryText text-base md:text-lg">
            Direct feedback from engineering leaders and founders who built with SHP Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayList.map((t) => (
            <figure
              key={t.id}
              className="p-8 rounded-3xl bg-surface-card border border-surface-border shadow-md flex flex-col justify-between relative"
            >
              <FiMessageSquare className="w-10 h-10 text-brand-primary/20 absolute top-6 right-6" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <blockquote className="text-secondaryText text-sm leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-3.5 pt-4 border-t border-surface-border">
                <span className="w-10 h-10 rounded-full  from-brand-primary to-brand-accent flex items-center justify-center text-brand-buttonText font-bold text-sm shadow-md">
                  {t.name ? t.name.split(' ').map((n) => n[0]).join('') : 'CL'}
                </span>
                <div>
                  <h4 className="font-bold text-primaryText text-sm">{t.name}</h4>
                  <p className="text-xs text-mutedText">{t.role}, <span className="text-brand-primary">{t.company}</span></p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
