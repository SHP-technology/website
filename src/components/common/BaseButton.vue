<template>
  <component
    :is="tag"
    :to="to"
    :type="isButton ? type : undefined"
    :disabled="disabled || loading"
    :class="[
      'base-button',
      `variant-${variant}`,
      `size-${size}`,
      { 'is-loading': loading, 'is-full-width': fullWidth }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <span v-else-if="$slots.iconLeft" class="icon-left">
      <slot name="iconLeft" />
    </span>
    <span class="button-label">
      <slot />
    </span>
    <span v-if="!loading && $slots.iconRight" class="icon-right">
      <slot name="iconRight" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    to?: string | object;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false
  }
);

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const isButton = computed(() => !props.to);
const tag = computed(() => (props.to ? 'router-link' : 'button'));

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e);
  }
};
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-weight: 700;
  border-radius: var(--radius-md);
  min-height: 2.75rem;
  transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.base-button:disabled,
.base-button.is-loading {
  opacity: 0.65;
  cursor: not-allowed;
}

.is-full-width {
  width: 100%;
}

/* Sizes */
.size-sm {
  min-height: 2.25rem;
  padding: 0.4375rem 0.75rem;
  font-size: var(--fs-xs);
}

.size-md {
  padding: 0.75rem 1.25rem;
  font-size: var(--fs-sm);
}

.size-lg {
  min-height: 3rem;
  padding: 0.8125rem 1.5rem;
  font-size: var(--fs-base);
}

/* Primary: Brand Yellow with High-Contrast Dark Text */
.variant-primary {
  background-color: var(--brand-yellow);
  color: #0F172A;
  border-color: var(--brand-yellow);
}

.variant-primary:hover:not(:disabled) {
  background-color: var(--brand-yellow-hover);
  border-color: var(--brand-yellow-hover);
  box-shadow: var(--shadow-yellow);
  transform: translateY(-1px);
}

/* Secondary: Deep Navy */
.variant-secondary {
  background-color: var(--bg-dark-surface);
  color: #FFFFFF;
  border-color: var(--bg-dark-surface);
}

.variant-secondary:hover:not(:disabled) {
  background-color: var(--bg-dark-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Outline: Subtle Border */
.variant-outline {
  background-color: transparent;
  color: var(--text-primary);
  border-color: var(--border-color);
}

.variant-outline:hover:not(:disabled) {
  background-color: var(--bg-surface-hover);
  border-color: var(--text-primary);
}

/* Ghost */
.variant-ghost {
  background-color: transparent;
  color: var(--text-primary);
}

.variant-ghost:hover:not(:disabled) {
  background-color: var(--bg-surface-hover);
}

/* Danger */
.variant-danger {
  background-color: var(--color-error);
  color: #FFFFFF;
  border-color: var(--color-error);
}

.variant-danger:hover:not(:disabled) {
  opacity: 0.9;
}

/* Loading Spinner */
.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
