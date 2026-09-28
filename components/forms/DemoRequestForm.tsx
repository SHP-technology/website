'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BaseInput } from '@/components/common/BaseInput';
import { BaseSelect } from '@/components/common/BaseSelect';
import { BaseButton } from '@/components/common/BaseButton';
import { BaseCheckbox } from '@/components/common/BaseCheckbox';
import { useFormValidation } from '@/hooks/useFormValidation';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const DemoRequestForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur, validateForm, resetForm } = useFormValidation(
    {
      name: '',
      email: '',
      company: '',
      productDemo: 'lms',
      date: ''
    },
    {
      name: { required: true },
      email: { required: true, email: true },
      company: { required: true },
      productDemo: { required: true },
      date: { required: true }
    }
  );

  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState('');

  const demoOptions = [
    { label: 'SHP E-Learning & LMS Platform', value: 'lms' },
    { label: 'SHP Restro & Cloud POS Management', value: 'pos' },
    { label: 'AI Document RAG & Vector Engine', value: 'ai' },
    { label: 'Custom Enterprise Suite Demo', value: 'custom' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formValid = validateForm();
    if (!consent) {
      setConsentError('Please confirm you agree to our Privacy Policy so we can schedule your demo.');
    } else {
      setConsentError('');
    }
    if (!formValid || !consent) return;
    setSubmitted(true);
    resetForm();
    setConsent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-5 border border-surface-border">
      {submitted && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Demo Session Scheduled! Our product team will confirm via email.</span>
        </div>
      )}

      <BaseInput
        label="Full Name *"
        placeholder="e.g. Rahul Sharma"
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        onBlur={() => handleBlur('name')}
        error={errors.name}
        required
      />

      <BaseInput
        label="Work Email *"
        type="email"
        placeholder="e.g. rahul@company.com"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        required
      />

      <BaseInput
        label="Company Name *"
        placeholder="e.g. TechCorp"
        value={values.company}
        onChange={(e) => handleChange('company', e.target.value)}
        onBlur={() => handleBlur('company')}
        error={errors.company}
        required
      />

      <BaseSelect
        label="Select Product Demo *"
        options={demoOptions}
        value={values.productDemo}
        onChange={(e) => handleChange('productDemo', e.target.value)}
      />

      <BaseInput
        label="Preferred Date *"
        type="date"
        value={values.date}
        onChange={(e) => handleChange('date', e.target.value)}
        onBlur={() => handleBlur('date')}
        error={errors.date}
        required
      />

      <BaseCheckbox
        id="demo-consent"
        checked={consent}
        onChange={(e) => {
          setConsent(e.target.checked);
          if (e.target.checked) setConsentError('');
        }}
        error={consentError}
        label={
          <>
            I agree to SHP Technology using my details to schedule and follow up on this demo, as described in the{' '}
            <Link href="/privacy-policy" className="text-brand-primary font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </>
        }
      />

      <BaseButton type="submit" variant="primary" size="lg" className="w-full mt-2">
        <Calendar className="w-4 h-4" />
        <span>Book Demo Session</span>
      </BaseButton>
    </form>
  );
};
