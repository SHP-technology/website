<template>
  <div class="flex flex-col gap-1.5 mb-4">
    <label v-if="label" :for="id" class="text-sm font-bold text-slate-900 dark:text-white">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
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
      :class="[
        'w-full min-h-[7.5rem] px-3.5 py-2.5 text-base md:text-sm rounded-xl backdrop-blur-md transition-all duration-200 resize-y focus:outline-none',
        'bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500',
        error
          ? 'border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
          : 'border border-slate-300 dark:border-white/15 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25'
      ]"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      @input="handleInput"
      @blur="$emit('blur', $event)"
    ></textarea>
    <span v-if="error" :id="`${id}-error`" class="text-xs font-semibold text-red-500">{{ error }}</span>
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
