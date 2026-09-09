'use client';

import React, { useState } from 'react';
import { BaseInput } from '@/components/common/BaseInput';
import { BaseTextarea } from '@/components/common/BaseTextarea';
import { BaseSelect } from '@/components/common/BaseSelect';
import { BaseButton } from '@/components/common/BaseButton';
import { useFormValidation } from '@/hooks/useFormValidation';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/src/config/site.config';

export const ContactForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur, validateForm, resetForm } = useFormValidation(
    {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'software',
      message: ''
    },
    {
      name: { required: true },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      company: {},
      subject: { required: true },
      message: { required: true, minLength: 5 }
    }
  );

  const { trackEvent } = useAnalytics();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { label: 'Enterprise Software Development', value: 'software' },
    { label: 'Cloud Architecture & DevOps', value: 'cloud' },
    { label: 'AI & Machine Learning Integration', value: 'ai' },
    { label: 'Distributed Systems & Microservices', value: 'distributed' },
    { label: 'Security & Compliance Audit', value: 'security' },
    { label: 'Other Business Inquiry', value: 'other' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    trackEvent('Contact Form', 'submit', values.subject);

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...values,
            source: 'Contact Page Form',
            timestamp: new Date().toISOString()
          })
        });
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }

      setSubmitted(true);
      resetForm();
    } catch (err) {
      console.error('Contact submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/919301885654?text=${encodeURIComponent(
    `Hi SHP Technology, my name is ${values.name || 'a visitor'}. I'd like to discuss a project.`
  )}`;

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-5 border border-surface-border">
      {submitted && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Inquiry Submitted! Our engineering team will contact you within 4 business hours.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BaseInput
          label="Full Name *"
          placeholder="e.g. Harsh Patel"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          required
        />
        <BaseInput
          label="Work Email *"
          type="email"
          placeholder="e.g. harsh@example.com"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BaseInput
          label="Contact Number / WhatsApp *"
          type="tel"
          placeholder="e.g. +91 9301885654"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={errors.phone}
          required
        />
        <BaseInput
          label="Company / Business Name (Optional)"
          placeholder="e.g. Acme Corp"
          value={values.company}
          onChange={(e) => handleChange('company', e.target.value)}
        />
      </div>

      <BaseSelect
        label="Project Type / Inquiry *"
        options={subjectOptions}
        value={values.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
      />

      <BaseTextarea
        label="Project Details & Requirements *"
        placeholder="Tell us about your project goals, technical stack, timeline, or budget..."
        rows={4}
        value={values.message}
        onChange={(e) => handleChange('message', e.target.value)}
        onBlur={() => handleBlur('message')}
        error={errors.message}
        required
      />

      <div className="pt-2 flex flex-col gap-3">
        <BaseButton type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
          <span>{loading ? 'Submitting...' : 'Send Inquiry'}</span>
          <Send className="w-4 h-4" />
        </BaseButton>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-xs transition-colors"
        >
          <span>💬 Need Instant Reply? Chat directly on WhatsApp →</span>
        </a>
      </div>
    </form>
  );
};
