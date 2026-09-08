<template>
  <form class="demo-request-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <BaseInput
        id="demo-name"
        v-model="form.name"
        label="Your Full Name *"
        placeholder="e.g. Jane Smith"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="demo-email"
        v-model="form.email"
        label="Email Address *"
        type="email"
        placeholder="e.g. jane@example.com"
        required
        :error="errors.email"
        @blur="validateEmail('email', form.email)"
      />
    </div>

    <div class="form-row">
      <BaseInput
        id="demo-phone"
        v-model="form.phone"
        label="Contact Number / WhatsApp *"
        type="tel"
        placeholder="e.g. +91 9301885654"
        required
        :error="errors.phone"
        @blur="validateRequired('phone', form.phone)"
      />
      <BaseInput
        id="demo-company"
        v-model="form.company"
        label="Business or Company Name (Optional)"
        placeholder="e.g. Acme Corp or Personal"
      />
    </div>

    <BaseSelect
      id="demo-interest"
      v-model="form.interest"
      label="What Would You Like a Demo Of? *"
      placeholder="Select software type..."
      required
      :options="demoTopics"
      :error="errors.interest"
    />

    <!-- Dynamic Custom Project Requirement Input -->
    <div v-if="form.interest === 'custom'" class="animate-fade-in-down">
      <BaseInput
        id="demo-custom-interest"
        v-model="form.customInterest"
        label="Specify Your Custom Software Requirement *"
        placeholder="e.g. School billing system, Real estate portal, Inventory software..."
        required
        :error="errors.customInterest"
        @blur="validateRequired('customInterest', form.customInterest)"
      />
    </div>

    <BaseTextarea
      id="demo-notes"
      v-model="form.notes"
      label="Project Details or Specific Questions (Optional)"
      placeholder="Tell us a bit about your business goals or any specific features you'd like to see during the live demo..."
      :rows="3"
    />

    <div class="form-actions flex flex-col gap-3">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        full-width
      >
        Schedule Free Live Demo →
      </BaseButton>

      <a
        :href="whatsappDirectUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackEvent('WhatsApp Direct Click from Demo Form')"
        class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-colors text-center"
      >
        <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>Request Demo via Instant WhatsApp →</span>
      </a>
    </div>

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

const { errors, validateRequired, validateEmail, clearErrors } = useFormValidation();
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
  interest: '',
  customInterest: '',
  notes: ''
});

const demoTopics = [
  { label: 'E-Commerce Store & Web Shop', value: 'ecommerce' },
  { label: 'Restaurant & Hostel Management Software', value: 'restaurant-hostel' },
  { label: 'Custom CRM & Lead Management System', value: 'crm' },
  { label: 'Chrome Extension & Web Automation Tool', value: 'chrome-ext' },
  { label: 'Hospital & Healthcare Management Software', value: 'healthcare' },
  { label: 'Custom Business Software (Write your requirement below...)', value: 'custom' }
];

const whatsappDirectUrl = computed(() => {
  const topic = form.interest === 'custom' ? form.customInterest : form.interest;
  const text = form.name
    ? `Hi SHP Technology, my name is ${form.name} (${form.phone || form.email}). I would like a live demo of: ${topic || 'Custom Software'}`
    : `Hi SHP Technology, I would like to schedule a live product demo.`;
  return `https://wa.me/919301885654?text=${encodeURIComponent(text)}`;
});

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validPhone = validateRequired('phone', form.phone);
  const validInterest = validateRequired('interest', form.interest, 'Please select a software type');
  
  let validCustom = true;
  if (form.interest === 'custom') {
    validCustom = validateRequired('customInterest', form.customInterest, 'Please describe your custom software requirement');
  }

  if (!validName || !validEmail || !validPhone || !validInterest || !validCustom) {
    return;
  }

  loading.value = true;
  const chosenInterest = form.interest === 'custom' ? `Custom: ${form.customInterest}` : form.interest;
  trackEvent('Demo Request Started', { topic: chosenInterest });

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
          interest: chosenInterest,
          notes: form.notes,
          source: 'Demo Request Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
    trackEvent('Demo Request Submitted', { topic: chosenInterest });

    toast.title = 'Demo Request Received!';
    toast.message = 'Our team will contact you shortly via email / phone to confirm your live demo schedule.';
    toast.type = 'success';
    toast.show = true;

    form.name = '';
    form.email = '';
    form.phone = '';
    form.company = '';
    form.interest = '';
    form.customInterest = '';
    form.notes = '';
  } catch (e) {
    toast.title = 'Request Failed';
    toast.message = 'An error occurred. Please try submitting your request again.';
    toast.type = 'error';
    toast.show = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.demo-request-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-actions {
  margin-top: var(--space-4);
}
</style>
