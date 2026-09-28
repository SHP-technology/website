import type { Metadata } from 'next';
import { siteConfig } from '@/src/config/site.config';
import { legalConfig } from '@/src/config/legal.config';
import { LegalShell, LegalSection, LegalP, LegalUL } from '@/components/legal/LegalLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SHP Technology collects, uses, shares and protects personal data, and your rights under the EU GDPR and India\'s Digital Personal Data Protection (DPDP) Act 2023.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${legalConfig.tradingName} ("we", "us", "our") collects, uses, discloses and safeguards personal data when you visit our website or contact us. We are committed to processing personal data lawfully, fairly and transparently in line with the EU General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection Act, 2023 (DPDP Act).`}
    >
      <LegalSection heading="1. Who we are (Data Controller / Data Fiduciary)">
        <LegalP>
          The business responsible for your personal data is {legalConfig.businessName}, based in India.
        </LegalP>
        <LegalUL>
          <li>Registered address: {legalConfig.registeredAddress}</li>
          <li>
            General contact:{' '}
            <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </li>
          <li>
            Privacy / data protection:{' '}
            <a className="text-brand-primary hover:underline" href={`mailto:${legalConfig.privacyEmail}`}>
              {legalConfig.privacyEmail}
            </a>
          </li>
        </LegalUL>
      </LegalSection>

      <LegalSection heading="2. Personal data we collect">
        <LegalP>We only collect the data we genuinely need for the purposes below (data minimisation):</LegalP>
        <LegalP><strong className="text-primaryText">a) Data you give us</strong> — when you submit a contact, demo-request or job-application form, or email/message us:</LegalP>
        <LegalUL>
          <li>Contact form: name, email, project/inquiry type, message, and (optionally) phone number and company name.</li>
          <li>Demo request: name, work email, company name, chosen product demo and preferred date.</li>
          <li>Job application: name, email, phone, a résumé link, optional LinkedIn/portfolio links and an optional cover letter.</li>
        </LegalUL>
        <LegalP><strong className="text-primaryText">b) Data collected automatically</strong> — only if you accept analytics cookies (see our <Link className="text-brand-primary hover:underline" href="/cookie-policy">Cookie Policy</Link>): device/browser type, approximate location, pages viewed and similar usage data collected via Google Analytics. Our web host may also process your IP address in server logs for security and to deliver the site.</LegalP>
        <LegalP>We do not intentionally collect any special-category / sensitive personal data through this website, and we ask that you do not include such data in free-text fields.</LegalP>
      </LegalSection>

      <LegalSection heading="3. How and why we use your data (purposes & legal bases)">
        <LegalUL>
          <li><strong className="text-primaryText">Responding to enquiries & providing services</strong> — legal basis: your consent and/or steps taken at your request prior to a contract (GDPR Art. 6(1)(a)/(b)); under the DPDP Act, processing for the purpose for which you voluntarily provided the data.</li>
          <li><strong className="text-primaryText">Recruitment</strong> — to evaluate job applications. Legal basis: consent / pre-contractual steps.</li>
          <li><strong className="text-primaryText">Analytics & site improvement</strong> — legal basis: your consent (GDPR Art. 6(1)(a); DPDP consent). No analytics run until you opt in.</li>
          <li><strong className="text-primaryText">Security, fraud prevention & legal compliance</strong> — legal basis: our legitimate interests and compliance with legal obligations.</li>
        </LegalUL>
        <LegalP>We do not sell your personal data, and we do not use it for automated decision-making that produces legal effects.</LegalP>
      </LegalSection>

      <LegalSection heading="4. Cookies & similar technologies">
        <LegalP>
          We use a strictly-necessary preference store (for your theme choice and your cookie-consent decision) and, only with your consent, analytics cookies. You can accept or reject non-essential cookies via our banner and change your choice at any time. Full details are in our{' '}
          <Link className="text-brand-primary hover:underline" href="/cookie-policy">Cookie Policy</Link>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="5. Who we share data with (processors & sub-processors)">
        <LegalP>We share data only with vetted service providers who process it on our behalf under contract, and where required by law. Our current processors are:</LegalP>
        <LegalUL>
          {legalConfig.processors.map((p) => (
            <li key={p.name}>
              <strong className="text-primaryText">{p.name}</strong> — {p.purpose} ({p.location}).{' '}
              <a className="text-brand-primary hover:underline" href={p.privacyUrl} target="_blank" rel="noopener noreferrer">
                Privacy notice
              </a>
            </li>
          ))}
        </LegalUL>
      </LegalSection>

      <LegalSection heading="6. International data transfers">
        <LegalP>
          Some of our processors are located outside India and the EU/EEA (for example, in the United States). Where personal data is transferred internationally, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses and the providers' own transfer mechanisms, and on the transfer rules permitted under the DPDP Act.
        </LegalP>
      </LegalSection>

      <LegalSection heading="7. How long we keep data (retention)">
        <LegalP>
          We keep personal data only as long as necessary for the purpose it was collected, then delete or anonymise it:
        </LegalP>
        <LegalUL>
          <li>Enquiry / demo data: up to 24 months after our last interaction, unless we enter a contract.</li>
          <li>Job applications: up to 12 months after the recruitment decision, unless you ask us to delete it sooner.</li>
          <li>Analytics data: retained per Google Analytics settings (default 14 months).</li>
        </LegalUL>
      </LegalSection>

      <LegalSection heading="8. How we protect your data">
        <LegalP>
          We apply reasonable technical and organisational security measures — including HTTPS/TLS encryption in transit, access controls and reputable processors — to protect personal data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security; we will notify you and the relevant authority of a personal-data breach where the law requires.
        </LegalP>
      </LegalSection>

      <LegalSection heading="9. Your rights">
        <LegalP><strong className="text-primaryText">Under the DPDP Act (India)</strong>, as a Data Principal you have the right to access a summary of your data and its processing, to correction and erasure, to grievance redressal, and to nominate another person to exercise your rights in the event of death or incapacity.</LegalP>
        <LegalP><strong className="text-primaryText">Under the GDPR (EU/EEA & UK)</strong>, you have the rights of access, rectification, erasure, restriction, data portability, objection, and to withdraw consent at any time without affecting prior processing.</LegalP>
        <LegalP>
          To exercise any right, email{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a>. We will respond within {legalConfig.grievanceResponseDays} days.
        </LegalP>
      </LegalSection>

      <LegalSection heading="10. Grievance Officer & complaints">
        <LegalP>
          In accordance with the DPDP Act 2023, you can raise any data-protection grievance with our{' '}
          {legalConfig.grievanceOfficer.designation}:
        </LegalP>
        <LegalUL>
          <li>Email: <a className="text-brand-primary hover:underline" href={`mailto:${legalConfig.grievanceOfficer.email}`}>{legalConfig.grievanceOfficer.email}</a></li>
          <li>Address: {legalConfig.grievanceOfficer.address}</li>
        </LegalUL>
        <LegalP>
          If we do not resolve your grievance, you may complain to the Data Protection Board of India (under the DPDP Act) or, if you are in the EU/EEA/UK, to your local data-protection supervisory authority.
        </LegalP>
      </LegalSection>

      <LegalSection heading="11. Children">
        <LegalP>
          This website is intended for businesses and adults. We do not knowingly collect data from children. Under the DPDP Act, we do not process a child's personal data without verifiable parental/guardian consent; if you believe a child has provided us data, contact us and we will delete it.
        </LegalP>
      </LegalSection>

      <LegalSection heading="12. Changes to this policy">
        <LegalP>
          We may update this policy from time to time. The "Last updated" date above reflects the latest version, and material changes will be posted on this page.
        </LegalP>
      </LegalSection>

      <LegalSection heading="13. Contact us">
        <LegalP>
          Questions about this policy or your data? Email{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a>{' '}
          or write to us at {legalConfig.registeredAddress}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
