<template>
  <div class="flex flex-col gap-1.5 mb-4">
    <label v-if="label" :for="id" class="text-sm font-bold text-slate-900 dark:text-white">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <select
      :id="id"
      :name="name || id"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="[
        'w-full min-h-[2.875rem] px-3.5 py-2.5 text-base md:text-sm rounded-xl backdrop-blur-md transition-all duration-200 focus:outline-none cursor-pointer',
        'bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white',
        error
          ? 'border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
          : 'border border-slate-300 dark:border-white/15 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25'
      ]"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      @change="handleChange"
      @blur="$emit('blur', $event)"
    >
      <option value="" disabled selected class="bg-white dark:bg-slate-900 text-slate-500">{{ placeholder || 'Select option' }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
      >
        {{ opt.label }}
      </option>
    </select>
    <span v-if="error" :id="`${id}-error`" class="text-xs font-semibold text-red-500">{{ error }}</span>
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
