'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Mail, Phone, ArrowRight } from 'lucide-react';
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
        <div className="pointer-events-auto mb-3 w-[calc(100vw-32px)] max-w-[360px] p-4 sm:p-5 rounded-3xl bg-surface-card text-primaryText border border-surface-border shadow-2xl backdrop-blur-xl animate-fade-in-up">
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
              <X className="w-4 h-4" />
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
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <div className="flex flex-col text-left">
                <span>Chat on WhatsApp</span>
                <span className="text-[11px] font-normal text-brand-buttonText/80">Instant direct response</span>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`mailto:${email}`}
              onClick={() => handleTrack('Email Direct Floating Widget')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-subtle/80 border border-surface-border text-secondaryText hover:text-primaryText font-medium text-xs transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-mutedText shrink-0" />
              <span>Email Founder Directly</span>
            </a>

            <a
              href={`tel:${phone}`}
              onClick={() => handleTrack('Phone Call Floating Widget')}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-subtle/80 border border-surface-border text-secondaryText hover:text-primaryText font-medium text-xs transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-mutedText shrink-0" />
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
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-surface-card text-primaryText text-xs font-semibold shadow-xl hover:shadow-2xl backdrop-blur-md border border-surface-border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none"
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
            <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          ) : (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-brand-buttonText relative z-10" />
          )}
        </button>
      </div>
    </div>
  );
};
