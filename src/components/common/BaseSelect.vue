<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
      <span v-if="required" class="required-star">*</span>
    </label>
    <select
      :id="id"
      :name="name || id"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="['form-select', { 'has-error': error }]"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      @change="handleChange"
      @blur="$emit('blur', $event)"
    >
      <option value="" disabled selected>{{ placeholder || 'Select option' }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>
    <span v-if="error" :id="`${id}-error`" class="form-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
export interface SelectOption {
  value: string;
  label: string;
}

defineProps<{
  id: string;
  modelValue: string;
  options: SelectOption[];
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
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

.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: var(--fs-base);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-surface);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.form-select:focus {
  outline: none;
  border-color: var(--brand-yellow-hover);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.25);
}

.form-select.has-error {
  border-color: var(--color-error);
}

.form-error {
  font-size: var(--fs-xs);
  color: var(--color-error);
  font-weight: 500;
}
</style>
