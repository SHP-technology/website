<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-200 shadow-sm"
    >
      <button
        type="button"
        class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-lg text-darkText dark:text-white hover:text-brand-hover dark:hover:text-brand-yellow transition-colors"
        :aria-expanded="openIndex === index"
        :aria-controls="`faq-answer-${index}`"
        @click="toggle(index)"
      >
        <span>{{ item.question }}</span>
        <span class="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-surface-subtle dark:bg-zinc-800 flex items-center justify-center text-darkText dark:text-white transition-transform duration-300" :class="{ 'rotate-180 bg-brand-light dark:bg-zinc-700': openIndex === index }">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>

      <Transition name="accordion">
        <div v-if="openIndex === index" :id="`faq-answer-${index}`" class="px-6 pb-6 text-gray-600 dark:text-zinc-300 text-base leading-relaxed border-t border-gray-100 dark:border-zinc-800/60 pt-4">
          {{ item.answer }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface FaqItem {
  question: string;
  answer: string;
}

defineProps<{
  items: FaqItem[];
}>();

const openIndex = ref<number | null>(0);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 300px;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
