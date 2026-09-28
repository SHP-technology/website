import type { Metadata } from 'next';
import { legalConfig } from '@/src/config/legal.config';
import { siteConfig } from '@/src/config/site.config';
import { LegalShell, LegalSection, LegalP, LegalUL } from '@/components/legal/LegalLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'What cookies and local storage SHP Technology uses, why, and how you can control them — including consent-gated Google Analytics.',
};

export default function CookiePolicyPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      intro="This Cookie Policy explains what cookies and similar technologies we use on this website, what they do, and how you can control them."
    >
      <LegalSection heading="1. What are cookies & local storage?">
        <LegalP>
          Cookies are small text files stored on your device by websites you visit. "Local storage" is a similar browser technology that lets a site remember small pieces of information (like your theme preference) on your device. Together we refer to these as "cookies" in this policy. They can be strictly necessary (needed for the site to work or to honour your privacy choices) or optional (such as analytics).
        </LegalP>
      </LegalSection>

      <LegalSection heading="2. How we use them">
        <LegalP><strong className="text-primaryText">Strictly necessary (always on)</strong> — these do not require consent because they only support core functionality and your own preferences:</LegalP>
        <LegalUL>
          <li><code className="text-brand-primary">theme</code> (local storage) — remembers your light/dark theme choice.</li>
          <li><code className="text-brand-primary">shp_cookie_consent</code> (local storage) — remembers whether you accepted or rejected analytics cookies, so we don't ask you again.</li>
        </LegalUL>
        <LegalP><strong className="text-primaryText">Analytics (optional — off until you accept)</strong>:</LegalP>
        <LegalUL>
          <li><strong className="text-primaryText">Google Analytics</strong> (<code className="text-brand-primary">_ga</code>, <code className="text-brand-primary">_ga_*</code>) — helps us understand, in aggregate, how visitors use the site so we can improve it. These cookies are only set <strong className="text-primaryText">after you click "Accept"</strong> on our cookie banner. If you reject or ignore the banner, Google Analytics is never loaded.</li>
        </LegalUL>
        <LegalP>We do not use advertising, marketing, or social-media tracking pixels (such as Meta Pixel) on this website.</LegalP>
      </LegalSection>

      <LegalSection heading="3. Consent & how to control cookies">
        <LegalP>
          When you first visit, a banner lets you <strong className="text-primaryText">Accept</strong> or <strong className="text-primaryText">Reject</strong> analytics cookies. No analytics cookies are set unless you accept. You can change your decision at any time by clearing this site's data in your browser (which resets the banner), or by using your browser's settings to block or delete cookies. Most browsers also offer a "Do Not Track" or global privacy control signal, which we respect where technically feasible.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Third-party cookies">
        <LegalP>The only third party that may set cookies through this site is Google (Analytics), and only with your consent. Its use of data is described in Google's privacy and cookie notices:</LegalP>
        <LegalUL>
          <li><a className="text-brand-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          <li><a className="text-brand-primary hover:underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
        </LegalUL>
      </LegalSection>

      <LegalSection heading="5. More information">
        <LegalP>
          For how we handle personal data generally, see our{' '}
          <Link className="text-brand-primary hover:underline" href="/privacy-policy">Privacy Policy</Link>. Questions about cookies can be sent to{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a>{' '}
          or{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
