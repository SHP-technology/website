'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { PlatformIcon } from '@/components/common/PlatformIcon';
import { siteConfig } from '@/src/config/site.config';
import { useAnalytics } from '@/hooks/useAnalytics';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  const email = siteConfig.contact.email;
  const phone = siteConfig.contact.phone;
  const whatsappUrl = siteConfig.contact.whatsapp;

  const handleTrack = (channel: string) => {
    trackEvent('Instant Contact Click', 'click', channel);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[calc(100vw-32px)] max-w-[360px] p-4 sm:p-5 rounded-3xl bg-surface-card text-primaryText border border-surface-border shadow-2xl  animate-fade-in-up">
          <div className="flex items-start justify-between mb-3 pb-3 border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                <h4 className="text-sm font-bold text-primaryText">SHP Technology Support</h4>
              </div>
              <p className="text-[11px] text-mutedText">
                Available online. Average response under 5 minutes.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-mutedText hover:text-primaryText hover:bg-surface-subtle transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleTrack('WhatsApp Floating Widget')}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <PlatformIcon platform="whatsapp" className="w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left">
                <span>Chat on WhatsApp</span>
                <span className="text-[11px] font-normal text-brand-buttonText/80">Instant direct response</span>
              </div>
              <FiArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`mailto:${siteConfig.contact.supportEmail}`}
              onClick={() => handleTrack('Email Direct Floating Widget')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-subtle/80 border border-surface-border text-secondaryText hover:text-primaryText font-medium text-xs transition-all duration-200"
            >
              <PlatformIcon platform="email" className="w-4 h-4 text-mutedText shrink-0" />
              <span>Contact Support Email</span>
            </a>

            <a
              href={`tel:${phone}`}
              onClick={() => handleTrack('Phone Call Floating Widget')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-subtle/80 border border-surface-border text-secondaryText hover:text-primaryText font-medium text-xs transition-all duration-200"
            >
              <PlatformIcon platform="phone" className="w-4 h-4 text-mutedText shrink-0" />
              <span>Call {phone}</span>
            </a>

            <Link
              href="/contact"
              onClick={() => {
                setIsOpen(false);
                handleTrack('Contact Form Floating Link');
              }}
              className="flex items-center justify-center gap-2 pt-2 text-center text-xs font-semibold text-brand-primary hover:underline"
            >
              Or fill out detailed project scope form →
            </Link>
          </div>
        </div>
      )}

      <div className="pointer-events-auto flex items-center gap-2.5">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-surface-card text-primaryText text-xs font-semibold shadow-xl hover:shadow-2xl  border border-surface-border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shrink-0" />
            <span className="whitespace-nowrap">Have a Project? <strong className="text-brand-primary">Chat</strong></span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-primary hover:bg-brand-accent text-brand-buttonText shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer shrink-0"
          aria-label="Toggle instant contact options"
        >
          <span className="absolute -inset-1 rounded-full bg-brand-primary/40 animate-ping pointer-events-none opacity-75" />

          {!isOpen ? (
            <PlatformIcon platform="whatsapp" className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
          ) : (
            <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-brand-buttonText relative z-10" />
          )}
        </button>
      </div>
    </div>
  );
};
