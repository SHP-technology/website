<template>
  <span :class="['inline-flex items-center px-3 py-1 rounded-full text-xs font-bold leading-none backdrop-blur-md shadow-xs transition-colors', badgeClasses]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'yellow' | 'sky' | 'neutral' | 'dark' | 'success';
  }>(),
  {
    variant: 'yellow'
  }
);

const badgeClasses = computed(() => {
  switch (props.variant) {
    case 'yellow':
      return 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30';
    case 'sky':
      return 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/30';
    case 'neutral':
      return 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10';
    case 'dark':
      return 'bg-slate-900 text-white dark:bg-slate-800/90 dark:text-slate-100 border border-slate-700 dark:border-white/10';
    case 'success':
      return 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30';
    default:
      return 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30';
  }
});
</script>
