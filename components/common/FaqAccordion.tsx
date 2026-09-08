'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ApiFaq } from '@/services/api';

interface FaqAccordionProps {
  faqs: ApiFaq[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.id || idx}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="font-bold text-slate-900 dark:text-white text-base md:text-lg pr-4">
                {faq.question}
              </span>
              <div className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-500' : 'text-slate-500'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fade-in-up">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
