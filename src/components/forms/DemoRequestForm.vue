<template>
  <form class="demo-request-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <BaseInput
        id="demo-name"
        v-model="form.name"
        label="Full Name"
        placeholder="Mark Watson"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="demo-email"
        v-model="form.email"
        label="Work Email"
        type="email"
        placeholder="mark@company.com"
        required
        :error="errors.email"
        @blur="validateEmail('email', form.email)"
      />
    </div>

    <div class="form-row">
      <BaseInput
        id="demo-company"
        v-model="form.company"
        label="Company Name"
        placeholder="Enterprise Solutions Inc."
        required
        :error="errors.company"
        @blur="validateRequired('company', form.company)"
      />
      <BaseSelect
        id="demo-interest"
        v-model="form.interest"
        label="Primary Demo Interest"
        placeholder="Select demo topic"
        required
        :options="demoTopics"
        :error="errors.interest"
      />
    </div>

    <BaseTextarea
      id="demo-notes"
      v-model="form.notes"
      label="Use Case & Custom Questions"
      placeholder="What specific architecture, throughput, or AI capability would you like to see live?"
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
        Request Live Engineering Demo
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
  company: '',
  interest: '',
  notes: ''
});

const demoTopics = [
  { label: 'RAG Knowledge Engine & Vector Search', value: 'rag' },
  { label: 'High-Throughput Payment Engine', value: 'payments' },
  { label: 'Kubernetes Multi-Cloud Infrastructure', value: 'k8s' },
  { label: 'Vue 3 Design System & UI Architecture', value: 'design-system' }
];

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validCompany = validateRequired('company', form.company);
  const validInterest = validateRequired('interest', form.interest, 'Please select a demo topic');

  if (!validName || !validEmail || !validCompany || !validInterest) {
    return;
  }

  loading.value = true;
  trackEvent('Demo Request Started', { topic: form.interest });

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
          company: form.company,
          interest: form.interest,
          notes: form.notes,
          source: 'Demo Request Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1100));
    }
    trackEvent('Demo Request Submitted', { topic: form.interest });

    toast.title = 'Demo Request Received!';
    toast.message = 'Our lead solutions architect will send a custom meeting invitation to your work email.';
    toast.type = 'success';
    toast.show = true;

    form.name = '';
    form.email = '';
    form.company = '';
    form.interest = '';
    form.notes = '';
  } catch (e) {
    toast.title = 'Request Failed';
    toast.message = 'An error occurred. Please try requesting your demo again.';
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
