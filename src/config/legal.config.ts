/**
 * ─────────────────────────────────────────────────────────────────────────
 *  LEGAL / COMPLIANCE CONFIGURATION  —  SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────
 *  This file feeds the Privacy Policy, Terms & Conditions, Cookie Policy,
 *  Refund Policy, footer business identity, and cookie-consent banner.
 *
 *  All values below are populated from verified site data (address, phones,
 *  emails, trading name). Formal statutory identifiers that were NOT provided
 *  — the registered legal-entity name/type, CIN/LLPIN, GSTIN, the named
 *  Grievance Officer, and any EU/UK Art.27 representative — have been OMITTED
 *  rather than guessed. If/when you have them, add them back here and the
 *  legal pages + footer will display them automatically:
 *    • registrationId / gstin  → re-add fields + the lines in privacy/terms
 *    • grievanceOfficer.name   → re-add the `name` field
 *  Have the final documents reviewed by a qualified lawyer for GDPR (EU) +
 *  DPDP Act 2023 (India) compliance before relying on them.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { siteConfig } from '@/src/config/site.config';

export interface LegalProcessor {
  name: string;
  purpose: string;
  location: string;
  privacyUrl: string;
}

const fullAddress = `${siteConfig.officeLocation.address}, ${siteConfig.officeLocation.city}, ${siteConfig.officeLocation.state} ${siteConfig.officeLocation.zip}, ${siteConfig.officeLocation.country}`;

export const legalConfig = {
  /** Human-readable effective/updated dates shown on every legal page. */
  effectiveDate: 'September 28, 2026',
  lastUpdated: 'September 28, 2026',

  /* ── Business / legal identity ─────────────────────────────────────── */
  // We operate under the name "SHP Technology". No separate registered-entity
  // name / incorporation type / registration number was supplied, so the
  // documents refer to the business by this trading name only.
  tradingName: siteConfig.name, // "SHP Technology"
  businessName: siteConfig.name, // used wherever the operating entity is named

  registeredAddress: fullAddress,

  /* ── Governing law & jurisdiction ──────────────────────────────────── */
  governingLawCountry: 'India',
  jurisdiction: 'the courts of Jabalpur, Madhya Pradesh, India',

  /* ── Privacy / DPDP contacts ───────────────────────────────────────── */
  // General privacy inbox. ⚠️ Ensure this mailbox actually exists & is monitored.
  privacyEmail: 'privacy@shptechnology.online',
  // DPDP Act 2023 contact point for grievances. No individual's name was
  // supplied, so we publish the office + monitored mailbox + address.
  grievanceOfficer: {
    designation: 'Grievance Officer & Data Protection point of contact',
    email: 'grievance@shptechnology.online',
    address: fullAddress,
  },

  /** Response window for data-subject / grievance requests. */
  grievanceResponseDays: 30,

  /* ── Third-party data processors / sub-processors ──────────────────── */
  // These are the services this codebase actually integrates with today.
  // Keep this list accurate — it is disclosed in the Privacy & Cookie policies.
  processors: [
    {
      name: 'Google LLC (Google Analytics)',
      purpose: 'Anonymous website usage analytics (only loaded AFTER you consent to analytics cookies).',
      location: 'United States / global',
      privacyUrl: 'https://policies.google.com/privacy',
    },
    {
      name: 'Google LLC (Google Apps Script / Sheets)',
      purpose: 'Receiving & storing contact-form submissions.',
      location: 'United States / global',
      privacyUrl: 'https://policies.google.com/privacy',
    },
    {
      name: 'Resend (Resend, Inc.)',
      purpose: 'Sending transactional / notification emails.',
      location: 'United States',
      privacyUrl: 'https://resend.com/legal/privacy-policy',
    },
    {
      name: 'Cloudflare, Inc.',
      purpose: 'Website hosting, CDN and DDoS protection.',
      location: 'United States / global edge network',
      privacyUrl: 'https://www.cloudflare.com/privacypolicy/',
    },
    {
      name: 'Render (Render Services, Inc.)',
      purpose: 'Backend API hosting.',
      location: 'United States',
      privacyUrl: 'https://render.com/privacy',
    },
  ] as LegalProcessor[],

  /* ── Refund / cancellation policy parameters ───────────────────────── */
  // Defaults for a B2B custom-software services model. Confirm they match your
  // actual contracts (SOW / MSA); the signed agreement always takes precedence.
  refund: {
    coolingOffDays: 7,      // window to cancel before work begins
    depositRefundable: false, // whether the initial deposit is refundable
    revisionRounds: 2,      // included revision rounds per milestone
  },
} as const;

export type LegalConfig = typeof legalConfig;
