<template>
  <form class="contact-form flex flex-col gap-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg transition-colors" @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <BaseInput
        id="name"
        v-model="form.name"
        label="Full Name *"
        placeholder="e.g. Sumit Srivastav"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="email"
        v-model="form.email"
        label="Work Email *"
        type="email"
        placeholder="e.g. sumit@example.com"
        required
        :error="errors.email"
        @blur="validateEmail('email', form.email)"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <BaseInput
        id="phone"
        v-model="form.phone"
        label="Contact Number / WhatsApp *"
        type="tel"
        placeholder="+91 93018 85654"
        required
        :error="errors.phone"
        @blur="validateRequired('phone', form.phone)"
      />
      <BaseInput
        id="company"
        v-model="form.company"
        label="Company / Business Name *"
        placeholder="e.g. Bima Gurukul or Personal"
        required
        :error="errors.company"
        @blur="validateRequired('company', form.company)"
      />
    </div>

    <BaseSelect
      id="subject"
      v-model="form.subject"
      label="Project Type / Inquiry *"
      placeholder="Select inquiry category"
      required
      :options="subjectOptions"
      :error="errors.subject"
    />

    <BaseTextarea
      id="message"
      v-model="form.message"
      label="Project Details & Requirements *"
      placeholder="Tell us about your project goals, technical requirements, timeline, and budget..."
      :rows="4"
      required
      :error="errors.message"
      @blur="validateMinLength('message', form.message, 15)"
    />

    <div class="pt-2">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        full-width
      >
        Send Inquiry
        <template #iconRight>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </template>
      </BaseButton>
    </div>

    <!-- Feedback Toast -->
    <BaseToast
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      :type="toast.type"
      @close="toast.show = false"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseTextarea from '@/components/common/BaseTextarea.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseToast from '@/components/common/BaseToast.vue';
import { useFormValidation } from '@/composables/useFormValidation';
import { useAnalytics } from '@/composables/useAnalytics';

const { errors, validateRequired, validateEmail, validateMinLength, clearErrors } = useFormValidation();
const { trackEvent } = useAnalytics();

const loading = ref(false);
const toast = reactive({
  show: false,
  title: '',
  message: '',
  type: 'success' as 'success' | 'error'
});

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
});

const subjectOptions = [
  { label: 'Enterprise Software Development', value: 'software' },
  { label: 'Cloud Architecture & DevOps', value: 'cloud' },
  { label: 'AI & Machine Learning Integration', value: 'ai' },
  { label: 'Distributed Systems & Microservices', value: 'distributed' },
  { label: 'Security & Compliance Audit', value: 'security' },
  { label: 'Other Business Inquiry', value: 'other' }
];

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validPhone = validateRequired('phone', form.phone);
  const validCompany = validateRequired('company', form.company);
  const validSubject = validateRequired('subject', form.subject, 'Please select a subject');
  const validMsg = validateMinLength('message', form.message, 15);

  if (!validName || !validEmail || !validPhone || !validCompany || !validSubject || !validMsg) {
    return;
  }

  loading.value = true;
  trackEvent('Contact Form Started', { subject: form.subject });

  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          subject: form.subject,
          message: form.message,
          source: 'Contact Page Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    trackEvent('Contact Form Submitted', { subject: form.subject });

    toast.type = 'success';
    toast.title = 'Inquiry Submitted Successfully';
    toast.message = 'Thank you for reaching out! A senior engineering director will respond within 4 hours.';
    toast.show = true;

    form.name = '';
    form.email = '';
    form.phone = '';
    form.company = '';
    form.subject = '';
    form.message = '';
  } catch (err) {
    console.error('Submission error:', err);
    toast.type = 'error';
    toast.title = 'Submission Error';
    toast.message = 'An unexpected network error occurred. Please try again or email founder.shp@gmail.com.';
    toast.show = true;
  } finally {
    loading.value = false;
  }
};
</script>
