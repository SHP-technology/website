<template>
  <section class="relative py-16 lg:py-24 overflow-hidden hero-section">
    <div class="container max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up">
      <!-- Tag Badge -->
      <div class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText mb-6 shadow-sm">
        <span class="w-2 h-2 rounded-full bg-brand-hover animate-pulse-glow"></span>
        <span>Software Development Company • Simple • Reliable • Fast</span>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkText leading-tight tracking-tight mb-6 max-w-3xl">
        We Build Custom Software and Web Apps That Help Your Business Grow
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-secondaryText leading-relaxed mb-8 max-w-2xl">
        We help companies write code, setup databases, manage web servers, and add smart tools to make daily work faster and easier.
      </p>

      <!-- CTA Action Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 w-full sm:w-auto">
        <BaseButton to="/contact" variant="primary" size="lg" class="group shadow-yellow-glow">
          Start a Conversation
          <template #iconRight>
            <svg class="group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </template>
        </BaseButton>

        <BaseButton to="/portfolio" variant="outline" size="lg" class="hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200">
          Explore Our Work
        </BaseButton>
      </div>

      <!-- Metric Badges -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 border-t border-gray-200 dark:border-zinc-800 justify-center">
        <div v-for="stat in companyData.metrics" :key="stat.label" class="flex flex-col items-center group">
          <span class="text-2xl font-extrabold text-darkText leading-none group-hover:text-brand-hover dark:group-hover:text-brand-yellow transition-colors">{{ stat.value }}</span>
          <span class="text-xs text-mutedText font-medium mt-1">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { companyData } from '@/data/company';
</script>

<style scoped>
.hero-section {
  background-image: var(--hero-bg-gradient);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
