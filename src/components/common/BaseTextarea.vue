<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
      <span v-if="required" class="required-star">*</span>
    </label>
    <textarea
      :id="id"
      :name="name || id"
      :autocomplete="autocomplete"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      :class="['form-textarea', { 'has-error': error }]"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      @input="handleInput"
      @blur="$emit('blur', $event)"
    ></textarea>
    <span v-if="error" :id="`${id}-error`" class="form-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    modelValue: string;
    label?: string;
    name?: string;
    autocomplete?: string;
    placeholder?: string;
    rows?: number;
    required?: boolean;
    disabled?: boolean;
    error?: string;
  }>(),
  {
    rows: 4
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
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

.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: var(--fs-base);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-surface);
  color: var(--text-primary);
  resize: vertical;
  transition: all var(--transition-fast);
}

.form-textarea:focus {
  outline: none;
  border-color: var(--brand-yellow-hover);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.25);
}

.form-textarea.has-error {
  border-color: var(--color-error);
}

.form-error {
  font-size: var(--fs-xs);
  color: var(--color-error);
  font-weight: 500;
}
</style>
