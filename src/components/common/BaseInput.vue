<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
      <span v-if="required" class="required-star">*</span>
    </label>
    <div class="input-wrapper">
      <input
        :id="id"
        :type="type"
        :name="name || id"
        :autocomplete="autocomplete"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="['form-input', { 'has-error': error }]"
        :aria-invalid="Boolean(error)"
        :aria-describedby="error ? `${id}-error` : undefined"
        @input="handleInput"
        @blur="$emit('blur', $event)"
      />
    </div>
    <span v-if="error" :id="`${id}-error`" class="form-error">{{ error }}</span>
    <span v-else-if="helpText" class="form-help">{{ helpText }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  modelValue: string;
  label?: string;
  type?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.form-label {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.required-star {
  color: var(--color-error);
}

.form-input {
  width: 100%;
  min-height: 2.875rem;
  padding: 0.6875rem 0.875rem;
  font-size: var(--fs-base);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-surface);
  color: var(--text-primary);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
}

.form-input::placeholder {
  color: var(--text-muted);
  opacity: 0.85;
}

.form-input:focus {
  outline: none;
  border-color: var(--brand-yellow-hover);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.25);
}

.form-input.has-error {
  border-color: var(--color-error);
  background-color: var(--color-error-bg);
}

.form-error {
  font-size: var(--fs-xs);
  color: var(--color-error);
  font-weight: 500;
}

.form-help {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}
</style>
