import type { Metadata } from 'next';
import { siteConfig } from '@/src/config/site.config';
import { legalConfig } from '@/src/config/legal.config';
import { LegalShell, LegalSection, LegalP, LegalUL } from '@/components/legal/LegalLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms governing your use of the SHP Technology website and services, including acceptable use, intellectual property, disclaimers and limitation of liability.',
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      intro={`These Terms & Conditions ("Terms") govern your access to and use of the ${legalConfig.tradingName} website and any services we agree to provide. By using this website you agree to these Terms. If you do not agree, please do not use the site.`}
    >
      <LegalSection heading="1. About us">
        <LegalP>
          This website is operated by {legalConfig.businessName}, based in India, with its office at {legalConfig.registeredAddress}. You can reach us at{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="2. Use of the website">
        <LegalP>You agree to use this website only for lawful purposes. You must not:</LegalP>
        <LegalUL>
          <li>use the site in any way that breaches applicable laws or regulations;</li>
          <li>attempt to gain unauthorised access to, interfere with, or disrupt the site, its servers, or any connected systems;</li>
          <li>submit false, misleading, or another person's information without authorisation;</li>
          <li>use automated means to scrape, harvest, or overload the site; or</li>
          <li>upload or transmit malware or any harmful code.</li>
        </LegalUL>
      </LegalSection>

      <LegalSection heading="3. Services, quotes & contracts">
        <LegalP>
          Information on this website about our services (custom software development, cloud, AI, and related engineering work) is for general information and does not constitute a binding offer. Any engagement is governed by a separate written agreement — such as a proposal, Statement of Work (SOW), or Master Services Agreement (MSA) — which will set out the specific scope, deliverables, timelines, fees and payment terms. In the event of a conflict, that signed agreement prevails over these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Fees & payment">
        <LegalP>
          Fees, milestones and payment schedules are as stated in the applicable proposal or SOW. Unless stated otherwise, quoted prices exclude applicable taxes (including GST, where chargeable). Late payments may attract interest and/or suspension of work as set out in the relevant agreement. Refunds and cancellations are handled under our{' '}
          <Link className="text-brand-primary hover:underline" href="/refund-policy">Refund Policy</Link>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="5. Intellectual property">
        <LegalP>
          All content on this website — including text, graphics, logos, the {legalConfig.tradingName} name and brand, layout and code — is owned by us or our licensors and is protected by intellectual-property laws. You may view and print pages for your own reference, but you must not copy, reproduce, republish or exploit any part of the site commercially without our prior written permission.
        </LegalP>
        <LegalP>
          Ownership of deliverables we create for clients (and any pre-existing or third-party materials) is governed by the specific engagement agreement, not by these website Terms.
        </LegalP>
      </LegalSection>

      <LegalSection heading="6. Third-party links">
        <LegalP>
          Our site may link to third-party websites and social platforms (for example LinkedIn, Instagram, Facebook, WhatsApp). We do not control and are not responsible for their content or privacy practices. Following those links is at your own risk.
        </LegalP>
      </LegalSection>

      <LegalSection heading="7. Disclaimers">
        <LegalP>
          The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, to the fullest extent permitted by law. While we take care to keep information accurate and up to date, we do not warrant that the site will be uninterrupted, error-free, or free of harmful components, and statements on this site are not professional advice for your specific situation.
        </LegalP>
      </LegalSection>

      <LegalSection heading="8. Limitation of liability">
        <LegalP>
          To the maximum extent permitted by applicable law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data or goodwill, arising out of or in connection with your use of this website. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law. Liability arising from any paid engagement is governed by, and capped as set out in, the relevant signed agreement.
        </LegalP>
      </LegalSection>

      <LegalSection heading="9. Indemnity">
        <LegalP>
          You agree to indemnify and hold us harmless from any claims, losses or expenses arising out of your misuse of the website or your breach of these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection heading="10. Privacy">
        <LegalP>
          Our handling of personal data is described in our{' '}
          <Link className="text-brand-primary hover:underline" href="/privacy-policy">Privacy Policy</Link> and{' '}
          <Link className="text-brand-primary hover:underline" href="/cookie-policy">Cookie Policy</Link>, which form part of these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection heading="11. Changes to these Terms">
        <LegalP>
          We may revise these Terms from time to time. The version shown here, dated above, is the current one. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.
        </LegalP>
      </LegalSection>

      <LegalSection heading="12. Governing law & jurisdiction">
        <LegalP>
          These Terms are governed by the laws of {legalConfig.governingLawCountry}. Subject to any mandatory consumer-protection rights you may have, disputes arising from these Terms or the website shall be subject to the exclusive jurisdiction of {legalConfig.jurisdiction}.
        </LegalP>
      </LegalSection>

      <LegalSection heading="13. Contact">
        <LegalP>
          Questions about these Terms? Email{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
