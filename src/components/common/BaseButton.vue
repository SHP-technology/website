<template>
  <component
    :is="tag"
    :to="to"
    :type="isButton ? type : undefined"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center gap-2 font-bold rounded-full cursor-pointer whitespace-nowrap select-none transition-all duration-200 relative overflow-hidden backdrop-blur-md',
      sizeClasses,
      variantClasses,
      { 'opacity-50 cursor-not-allowed': disabled || loading, 'w-full': fullWidth }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin"></span>
    <span v-else-if="$slots.iconLeft" class="inline-flex items-center shrink-0">
      <slot name="iconLeft" />
    </span>
    <span>
      <slot />
    </span>
    <span v-if="!loading && $slots.iconRight" class="inline-flex items-center shrink-0">
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

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'min-h-[2.25rem] px-3.5 py-1.5 text-xs';
    case 'lg':
      return 'min-h-[3rem] px-7 py-3 text-base';
    case 'md':
    default:
      return 'min-h-[2.625rem] px-5 py-2.5 text-sm';
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold border border-amber-300 shadow-md hover:shadow-lg shadow-amber-500/20 active:scale-95';
    case 'secondary':
      return 'bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-300 dark:border-white/12 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-xs active:scale-95';
    case 'outline':
      return 'bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs active:scale-95';
    case 'ghost':
      return 'bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95';
    case 'danger':
      return 'bg-red-600 hover:bg-red-500 text-white border border-red-500 shadow-sm active:scale-95';
    default:
      return 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold border border-amber-300 shadow-md';
  }
});
</script>
