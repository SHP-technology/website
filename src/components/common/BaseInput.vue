<template>
  <div class="flex flex-col gap-1.5 mb-4">
    <label v-if="label" :for="id" class="text-sm font-bold text-slate-900 dark:text-white">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :name="name || id"
        :autocomplete="autocomplete"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="[
          'w-full min-h-[2.875rem] px-3.5 py-2.5 text-base md:text-sm rounded-xl backdrop-blur-md transition-all duration-200 focus:outline-none',
          'bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500',
          error
            ? 'border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
            : 'border border-slate-300 dark:border-white/15 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25'
        ]"
        :aria-invalid="Boolean(error)"
        :aria-describedby="error ? `${id}-error` : undefined"
        @input="handleInput"
        @blur="$emit('blur', $event)"
      />
    </div>
    <span v-if="error" :id="`${id}-error`" class="text-xs font-semibold text-red-500">{{ error }}</span>
    <span v-else-if="helpText" class="text-xs text-slate-500 dark:text-slate-400">{{ helpText }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  modelValue: string;
  label?: string;
  type?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
