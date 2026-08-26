<template>
  <div
    :class="[
      'base-card',
      { 'is-hoverable': hoverable, 'has-border': border }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    hoverable?: boolean;
    border?: boolean;
  }>(),
  {
    hoverable: true,
    border: true
  }
);
</script>

<style scoped>
.base-card {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  position: relative;
  box-shadow: var(--shadow-sm);
}

.base-card.has-border {
  border: 1px solid var(--border-color);
}

.base-card.is-hoverable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--glow-yellow-hover);
}
</style>
