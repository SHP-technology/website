<template>
  <form class="demo-request-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <BaseInput
        id="demo-name"
        v-model="form.name"
        label="Your Full Name *"
        placeholder="e.g. Sumit Srivastav"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="demo-email"
        v-model="form.email"
        label="Email Address *"
        type="email"
        placeholder="e.g. sumit@example.com"
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
        placeholder="+91 93018 85654"
        required
        :error="errors.phone"
        @blur="validateRequired('phone', form.phone)"
      />
      <BaseInput
        id="demo-company"
        v-model="form.company"
        label="Business or Company Name *"
        placeholder="e.g. Bima Gurukul or Personal"
        required
        :error="errors.company"
        @blur="validateRequired('company', form.company)"
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

    <div class="form-actions">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        full-width
      >
        Schedule Free Live Demo →
      </BaseButton>
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
import { reactive, ref } from 'vue';
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

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validPhone = validateRequired('phone', form.phone);
  const validCompany = validateRequired('company', form.company);
  const validInterest = validateRequired('interest', form.interest, 'Please select a software type');
  
  let validCustom = true;
  if (form.interest === 'custom') {
    validCustom = validateRequired('customInterest', form.customInterest, 'Please describe your custom software requirement');
  }

  if (!validName || !validEmail || !validPhone || !validCompany || !validInterest || !validCustom) {
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
          company: form.company,
          interest: chosenInterest,
          notes: form.notes,
          source: 'Demo Request Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1100));
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
