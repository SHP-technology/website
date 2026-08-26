<template>
  <form class="job-apply-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <BaseInput
        id="applicant-name"
        v-model="form.name"
        label="Full Name"
        placeholder="e.g. Jane Smith"
        required
        :error="errors.name"
        @blur="validateRequired('name', form.name)"
      />
      <BaseInput
        id="applicant-email"
        v-model="form.email"
        label="Email Address"
        type="email"
        placeholder="e.g. jane@example.com"
        required
        :error="errors.email"
        @blur="validateEmail('email', form.email)"
      />
    </div>

    <div class="form-row">
      <BaseInput
        id="applicant-phone"
        v-model="form.phone"
        label="Phone Number"
        placeholder="e.g. +91 00000 00000"
        required
        :error="errors.phone"
        @blur="validateRequired('phone', form.phone)"
      />
      <BaseInput
        id="applicant-links"
        v-model="form.portfolio"
        label="LinkedIn / GitHub / Portfolio URL"
        placeholder="https://github.com/username"
        required
        :error="errors.portfolio"
        @blur="validateRequired('portfolio', form.portfolio)"
      />
    </div>

    <!-- Resume File Upload Field -->
    <div class="form-group file-upload-group">
      <label class="form-label">
        Resume / CV (PDF or DOCX)
        <span class="required-star">*</span>
      </label>
      <div class="file-drop-zone" :class="{ 'has-file': fileName, 'has-error': errors.file }">
        <input
          type="file"
          id="resume-file"
          accept=".pdf,.docx,.doc"
          class="file-input"
          @change="handleFileUpload"
        />
        <label for="resume-file" class="file-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
          <span v-if="!fileName">Click to attach file or drag & drop</span>
          <span v-else class="file-selected-name">Attached: {{ fileName }}</span>
        </label>
      </div>
      <span v-if="errors.file" class="form-error">{{ errors.file }}</span>
    </div>

    <BaseTextarea
      id="applicant-cover"
      v-model="form.cover"
      label="Cover Message / Why SHP Technology?"
      placeholder="Briefly describe your relevant technical projects and why you would thrive in this position..."
      :rows="4"
      required
      :error="errors.cover"
      @blur="validateMinLength('cover', form.cover, 20)"
    />

    <div class="form-actions">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        full-width
      >
        Submit Job Application
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
import BaseButton from '@/components/common/BaseButton.vue';
import BaseToast from '@/components/common/BaseToast.vue';
import { useFormValidation } from '@/composables/useFormValidation';
import { useAnalytics } from '@/composables/useAnalytics';

const props = defineProps<{
  jobTitle: string;
}>();

const emit = defineEmits<{
  (e: 'submitted'): void;
}>();

const { errors, validateRequired, validateEmail, validateMinLength, clearErrors } = useFormValidation();
const { trackEvent } = useAnalytics();

const loading = ref(false);
const fileName = ref('');
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
  portfolio: '',
  cover: ''
});

const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      errors.value.file = 'File size must be under 5MB.';
      fileName.value = '';
      return;
    }
    fileName.value = file.name;
    delete errors.value.file;
  }
};

const handleSubmit = async () => {
  clearErrors();
  const validName = validateRequired('name', form.name);
  const validEmail = validateEmail('email', form.email);
  const validPhone = validateRequired('phone', form.phone);
  const validLink = validateRequired('portfolio', form.portfolio);
  const validCover = validateMinLength('cover', form.cover, 20);

  if (!fileName.value) {
    errors.value.file = 'Please attach your Resume / CV.';
  }

  if (!validName || !validEmail || !validPhone || !validLink || !validCover || !fileName.value) {
    return;
  }

  loading.value = true;
  trackEvent('Job Application Started', { jobTitle: props.jobTitle });

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
          jobTitle: props.jobTitle,
          name: form.name,
          email: form.email,
          phone: form.phone,
          portfolio: form.portfolio,
          cover: form.cover,
          resume: fileName.value,
          source: 'Careers Job Application Form',
          timestamp: new Date().toISOString()
        })
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1400));
    }
    trackEvent('Job Application Submitted', { jobTitle: props.jobTitle });

    toast.title = 'Application Submitted!';
    toast.message = `Your application for ${props.jobTitle} has been received. Our recruiting lead will reach out shortly.`;
    toast.type = 'success';
    toast.show = true;

    emit('submitted');
  } catch (e) {
    toast.title = 'Submission Error';
    toast.message = 'An unexpected error occurred. Please try submitting again.';
    toast.type = 'error';
    toast.show = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.job-apply-form {
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

.file-upload-group {
  margin-bottom: var(--space-4);
}

.file-drop-zone {
  position: relative;
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  text-align: center;
  background-color: var(--bg-surface-subtle);
  transition: all var(--transition-fast);
}

.file-drop-zone:hover {
  border-color: var(--brand-yellow-hover);
  background-color: var(--brand-yellow-light);
}

.file-drop-zone.has-file {
  border-style: solid;
  border-color: var(--color-success);
  background-color: var(--color-success-bg);
}

.file-drop-zone.has-error {
  border-color: var(--color-error);
}

.file-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.file-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  cursor: pointer;
}

.file-selected-name {
  font-weight: 600;
  color: var(--text-primary);
}

.form-error {
  font-size: var(--fs-xs);
  color: var(--color-error);
  font-weight: 500;
  margin-top: var(--space-1);
}
</style>
