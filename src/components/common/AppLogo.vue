<template>
  <div class="inline-flex items-center select-none group cursor-pointer">
    <img
      src="/assets/image.png"
      alt="SHP Technology — Software Development Company"
      width="64"
      height="64"
      decoding="async"
      :class="[
        sizeClass,
        'object-contain transition-transform duration-300 group-hover:scale-105 rounded-full'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'header' | 'full' | 'icon';
    dark?: boolean;
    height?: string;
  }>(),
  {
    variant: 'header',
    dark: false,
    height: 'h-10'
  }
);

const sizeClass = computed(() => {
  if (props.height) return props.height;
  if (props.variant === 'full') return 'h-14 md:h-16 w-auto';
  if (props.variant === 'header') return 'h-10 md:h-12 w-auto';
  return 'h-8 w-auto';
});
</script>
