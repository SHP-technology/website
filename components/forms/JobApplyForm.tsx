'use client';

import React, { useState } from 'react';
import { BaseInput } from '@/components/common/BaseInput';
import { BaseTextarea } from '@/components/common/BaseTextarea';
import { BaseButton } from '@/components/common/BaseButton';
import { useFormValidation } from '@/hooks/useFormValidation';
import { CheckCircle2, Upload } from 'lucide-react';

interface JobApplyFormProps {
  jobTitle: string;
}

export const JobApplyForm: React.FC<JobApplyFormProps> = ({ jobTitle }) => {
  const { values, errors, handleChange, handleBlur, validateForm, resetForm } = useFormValidation(
    {
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      resumeUrl: '',
      coverLetter: ''
    },
    {
      name: { required: true },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      linkedin: {},
      github: {},
      resumeUrl: { required: true },
      coverLetter: {}
    }
  );

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-5 border border-slate-200/80 dark:border-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
        Apply for: <span className="text-amber-500">{jobTitle}</span>
      </h3>

      {submitted && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Application Received! Our talent acquisition team will review your application.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BaseInput
          label="Full Name *"
          placeholder="e.g. Priyanshu Singh"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          required
        />
        <BaseInput
          label="Email Address *"
          type="email"
          placeholder="e.g. priyanshu@example.com"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BaseInput
          label="Phone Number *"
          type="tel"
          placeholder="e.g. +91 9301885654"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={errors.phone}
          required
        />
        <BaseInput
          label="Resume URL / Google Drive Link *"
          placeholder="e.g. https://drive.google.com/..."
          value={values.resumeUrl}
          onChange={(e) => handleChange('resumeUrl', e.target.value)}
          onBlur={() => handleBlur('resumeUrl')}
          error={errors.resumeUrl}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BaseInput
          label="LinkedIn Profile (Optional)"
          placeholder="https://linkedin.com/in/..."
          value={values.linkedin}
          onChange={(e) => handleChange('linkedin', e.target.value)}
        />
        <BaseInput
          label="GitHub / Portfolio (Optional)"
          placeholder="https://github.com/..."
          value={values.github}
          onChange={(e) => handleChange('github', e.target.value)}
        />
      </div>

      <BaseTextarea
        label="Cover Letter / Introduction"
        placeholder="Tell us about your relevant projects, technical background, and why you want to join..."
        rows={4}
        value={values.coverLetter}
        onChange={(e) => handleChange('coverLetter', e.target.value)}
      />

      <BaseButton type="submit" variant="amber" size="lg" className="w-full mt-2">
        <Upload className="w-4 h-4" />
        <span>Submit Application</span>
      </BaseButton>
    </form>
  );
};
