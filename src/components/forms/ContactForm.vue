<template>
  <form class="contact-form flex flex-col gap-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg transition-colors" @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <BaseInput
        id="name"
        v-model="form.name"
        label="Full Name *"
        placeholder="e.g. John Doe"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="email"
        v-model="form.email"
        label="Work Email *"
        type="email"
        placeholder="e.g. john@example.com"
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
        placeholder="e.g. +91 9301885654"
        required
        :error="errors.phone"
        @blur="validateRequired('phone', form.phone)"
      />
      <BaseInput
        id="company"
        v-model="form.company"
        label="Company / Business Name (Optional)"
        placeholder="e.g. Acme Corp or Personal"
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
      placeholder="Tell us about your project goals, technical requirements, timeline, or budget..."
      :rows="4"
      required
      :error="errors.message"
      @blur="validateMinLength('message', form.message, 5)"
    />

    <div class="pt-2 flex flex-col gap-3">
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

      <a
        :href="whatsappDirectUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackEvent('WhatsApp Direct Click from Contact Form')"
        class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-colors text-center"
      >
        <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>Need Instant Reply? Chat directly on WhatsApp →</span>
      </a>
    </div>

    <!-- Success / Error Toast with WhatsApp Direct Link -->
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
import { reactive, ref, computed } from 'vue';
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
  subject: 'software',
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

const whatsappDirectUrl = computed(() => {
  const text = form.name
    ? `Hi SHP Technology, my name is ${form.name} (${form.phone || form.email}). I am interested in: ${form.message || form.subject}`
    : `Hi SHP Technology, I would like to discuss a software project.`;
  return `https://wa.me/919301885654?text=${encodeURIComponent(text)}`;
});

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validPhone = validateRequired('phone', form.phone);
  const validSubject = validateRequired('subject', form.subject, 'Please select a subject');
  const validMsg = validateMinLength('message', form.message, 5);

  if (!validName || !validEmail || !validPhone || !validSubject || !validMsg) {
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
          company: form.company || 'N/A',
          subject: form.subject,
          message: form.message,
          source: 'Contact Page Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    trackEvent('Contact Form Submitted', { subject: form.subject });

    toast.type = 'success';
    toast.title = 'Inquiry Submitted!';
    toast.message = `Thank you ${form.name}! Our team will contact you within 4 hours. Feel free to chat on WhatsApp for faster response!`;
    toast.show = true;

    // Reset form after recording
    form.name = '';
    form.email = '';
    form.phone = '';
    form.company = '';
    form.subject = 'software';
    form.message = '';
  } catch (err) {
    console.error('Submission error:', err);
    toast.type = 'error';
    toast.title = 'Network Notice';
    toast.message = 'Please contact us directly on WhatsApp or email founder.shp@gmail.com.';
    toast.show = true;
  } finally {
    loading.value = false;
  }
};
</script>
