import React from 'react';
import { techStackData } from '@/src/data/techStack';
import { BaseBadge } from '@/components/common/BaseBadge';
import { Code2, Server, Cloud, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 bg-surface-subtle/40 border-y border-surface-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BaseBadge variant="amber" className="mb-4 uppercase tracking-widest text-[10px]">
            Tech Stack & Tools
          </BaseBadge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4">
            Modern Battle-Tested Stack
          </h2>
          <p className="text-secondaryText text-base md:text-lg">
            We leverage cutting-edge frameworks, cloud systems, and AI tooling for maximum reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackData.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-surface-card border border-surface-border shadow-sm flex flex-col gap-5"
            >
              <h3 className="text-lg font-bold text-primaryText pb-3 border-b border-surface-border flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                {cat.category}
              </h3>

              <div className="flex flex-col gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-semibold text-primaryText text-sm">
                      {item.name}
                    </span>
                    <span className="text-xs text-mutedText">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
