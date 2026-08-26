<template>
  <span :class="['base-badge', `badge-${variant}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'yellow' | 'sky' | 'neutral' | 'dark' | 'success';
  }>(),
  {
    variant: 'yellow'
  }
);
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
  font-size: var(--fs-xs);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.badge-yellow {
  background-color: var(--brand-yellow-light);
  color: var(--text-primary);
  border: 1px solid var(--brand-yellow-border);
}

.badge-sky {
  background-color: var(--brand-sky-light);
  color: var(--brand-sky-hover);
  border: 1px solid var(--glow-sky-border);
}

.badge-neutral {
  background-color: var(--bg-surface-subtle);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.badge-dark {
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  border: 1px solid var(--border-color-dark);
}

.badge-success {
  background-color: var(--color-success-bg);
  color: var(--color-success);
}
</style>
