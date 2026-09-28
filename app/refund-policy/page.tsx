import type { Metadata } from 'next';
import { siteConfig } from '@/src/config/site.config';
import { legalConfig } from '@/src/config/legal.config';
import { LegalShell, LegalSection, LegalP, LegalUL } from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description:
    'SHP Technology refund, cancellation and revision terms for custom software development and related services.',
};

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund Policy"
      intro={`This Refund & Cancellation Policy explains how refunds, cancellations and revisions work for services provided by ${legalConfig.tradingName}. Because we provide custom, made-to-order software and engineering services, refunds are handled differently from off-the-shelf products.`}
    >
      <LegalSection heading="1. Scope">
        <LegalP>
          This policy applies to engagements booked directly with {legalConfig.tradingName}. Where you have signed a proposal, Statement of Work (SOW) or Master Services Agreement (MSA), the refund and cancellation terms in that signed document take precedence over this general policy.
        </LegalP>
      </LegalSection>

      <LegalSection heading="2. Cooling-off / cancellation before work begins">
        <LegalP>
          You may cancel a newly-booked engagement within{' '}
          {legalConfig.refund.coolingOffDays} days of confirmation, provided we have not yet started work, for a full refund of any amount paid. Once work or resource allocation has begun, refunds are handled on a pro-rata basis as described below.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. Deposits & advance payments">
        <LegalP>
          Deposits or advance payments reserve our team's time and cover initial discovery, planning and setup.{' '}
          {legalConfig.refund.depositRefundable
            ? 'Deposits are refundable, less the value of any work already performed.'
            : 'Deposits are non-refundable once discovery/planning work has commenced, but are credited in full against the project fee.'}
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Cancellation after work has started">
        <LegalP>
          If you cancel an in-progress engagement, you will be invoiced for:
        </LegalP>
        <LegalUL>
          <li>all work completed and accepted up to the cancellation date;</li>
          <li>work in progress, on a pro-rata basis; and</li>
          <li>any non-recoverable third-party costs already committed on your behalf (e.g. licences, cloud, paid APIs).</li>
        </LegalUL>
        <LegalP>Any amount you have paid in excess of the above will be refunded to you.</LegalP>
      </LegalSection>

      <LegalSection heading="5. Revisions & fixes">
        <LegalP>
          Each milestone typically includes up to{' '}
          {legalConfig.refund.revisionRounds} rounds of revisions within the agreed scope. Defects in delivered work that do not match the agreed specification will be fixed at no additional cost. New or changed requirements ("scope changes") are quoted and billed separately and are not grounds for a refund of completed work.
        </LegalP>
      </LegalSection>

      <LegalSection heading="6. What is non-refundable">
        <LegalUL>
          <li>Work already delivered and accepted, or delivered per the agreed specification.</li>
          <li>Third-party costs already incurred (domains, licences, cloud usage, paid subscriptions).</li>
          <li>Time-and-materials work for hours already worked.</li>
          <li>Completed one-off services such as audits, consultations or workshops.</li>
        </LegalUL>
      </LegalSection>

      <LegalSection heading="7. How to request a refund or cancel">
        <LegalP>
          Send a written request to{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.billingEmail}`}>{siteConfig.contact.billingEmail}</a>{' '}
          (copy{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>) with your project name and the reason. We will acknowledge within{' '}
          3 business days and process any approved refund within{' '}
          7–14 business days to the original payment method.
        </LegalP>
      </LegalSection>

      <LegalSection heading="8. Chargebacks">
        <LegalP>
          Please contact us first — we aim to resolve billing concerns amicably. Raising a chargeback without first contacting us may delay resolution.
        </LegalP>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <LegalP>
          Questions about this policy? Email{' '}
          <a className="text-brand-primary hover:underline" href={`mailto:${siteConfig.contact.billingEmail}`}>{siteConfig.contact.billingEmail}</a>.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
