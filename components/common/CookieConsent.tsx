'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/config/site.config';

const CONSENT_KEY = 'shp_cookie_consent';
const GA_ID = siteConfig.site.analyticsId;

function ensureGtag() {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
  }
  return w.gtag as (...args: any[]) => void;
}

function loadGoogleAnalytics() {
  const w = window as any;
  if (!GA_ID || w.__ga_loaded) return;
  w.__ga_loaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  const gtag = ensureGtag();
  gtag('js', new Date());
  // IP anonymisation on; analytics only runs because the user consented.
  gtag('config', GA_ID, { anonymize_ip: true });
}

/**
 * GDPR / DPDP-compliant cookie consent.
 * - Sets Google Consent Mode defaults to "denied" on load.
 * - Google Analytics is ONLY loaded after the user clicks "Accept".
 * - The choice is remembered in localStorage so we don't ask again.
 */
export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const gtag = ensureGtag();
    // Consent Mode v2 — deny everything until the user opts in.
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* storage blocked (private mode etc.) — fall through to showing banner */
    }

    if (stored === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
      loadGoogleAnalytics();
    } else if (stored !== 'denied') {
      setVisible(true);
    }
  }, []);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, 'granted');
    } catch {
      /* ignore */
    }
    ensureGtag()('consent', 'update', { analytics_storage: 'granted' });
    loadGoogleAnalytics();
    setVisible(false);
  }, []);

  const reject = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, 'denied');
    } catch {
      /* ignore */
    }
    ensureGtag()('consent', 'update', { analytics_storage: 'denied' });
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
    >
      <div className="container max-w-4xl mx-auto rounded-2xl border border-surface-border bg-surface-card/95 backdrop-blur-xl shadow-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-xs sm:text-sm text-secondaryText leading-relaxed flex-1">
          We use strictly-necessary cookies to run this site and, with your consent, Google Analytics to understand
          how it's used. No analytics run until you accept. See our{' '}
          <Link href="/cookie-policy" className="text-brand-primary font-semibold hover:underline">
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-brand-primary font-semibold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2.5 rounded-xl border border-surface-border text-primaryText text-xs sm:text-sm font-semibold hover:bg-surface-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-main transition-colors cursor-pointer"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-accent text-brand-buttonText text-xs sm:text-sm font-extrabold shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-main transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
