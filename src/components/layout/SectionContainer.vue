<template>
  <section :class="['section-container', { 'bg-alt': bgAlt }]">
    <div :class="['container', compact ? 'section-padding-compact' : 'section-padding']">
      <div v-if="title || tag" class="section-header">
        <span v-if="tag" class="tag">{{ tag }}</span>
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string;
    title?: string;
    subtitle?: string;
    bgAlt?: boolean;
    compact?: boolean;
  }>(),
  {
    bgAlt: false,
    compact: false
  }
);
</script>

<style scoped>
.section-container {
  width: 100%;
  background-color: var(--bg-main);
  color: var(--text-primary);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

.section-container.bg-alt {
  background-color: var(--bg-surface-subtle);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
</style>
