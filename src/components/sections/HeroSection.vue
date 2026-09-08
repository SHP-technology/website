<template>
  <section class="relative py-16 lg:py-24 overflow-hidden hero-section">
    <!-- Ambient orbs — light sources that bleed through glass -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-brand-yellow/10 blur-[100px]"></div>
      <div class="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-sky-400/8 blur-[80px]"></div>
    </div>
    <div class="container max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up relative z-10">
      <!-- Tag Badge — glass pill -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 text-slate-900 dark:text-white mb-6 shadow-sm">
        <span class="w-2 h-2 rounded-full bg-brand-hover dark:bg-brand-yellow animate-pulse-glow"></span>
        <span>Software Development Company • Simple • Reliable • Fast</span>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6 max-w-3xl">
        We Build Custom Software and Web Apps That Help Your Business Grow
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
        We help companies write code, setup databases, manage web servers, and add smart tools to make daily work faster and easier.
      </p>

      <!-- CTA Action Buttons -->
      <div class="flex flex-wrap justify-center items-center gap-4 mb-12 w-full sm:w-auto">
        <BaseButton to="/contact" variant="primary" size="lg" class="group shadow-yellow-glow">
          Start a Conversation
          <template #iconRight>
            <svg class="group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </template>
        </BaseButton>

        <a
          :href="siteConfig.contact.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full backdrop-blur-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-base hover:bg-emerald-500/20 transition-all duration-200 shadow-sm"
        >
          <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Chat on WhatsApp</span>
        </a>

        <BaseButton to="/portfolio" variant="outline" size="lg">
          Explore Our Work
        </BaseButton>
      </div>

      <!-- Metric Badges — reference-style warm glass tiles -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div v-for="stat in companyData.metrics" :key="stat.label"
          class="p-4 rounded-2xl flex flex-col items-center group hover:-translate-y-1 transition-all duration-200 backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md hover:shadow-lg"
        >
          <span class="text-2xl font-extrabold text-slate-900 dark:text-white leading-none group-hover:text-brand-hover dark:group-hover:text-brand-yellow transition-colors">{{ stat.value }}</span>
          <span class="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1.5">{{ stat.label }}</span>
          <span class="text-[11px] font-semibold text-brand-sky dark:text-sky-400 mt-0.5">→ {{ stat.tagline }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { companyData } from '@/data/company';
import { siteConfig } from '@/config/site.config';
</script>

<style scoped>
.hero-section {
  background-image: var(--hero-bg-gradient);
}
</style>
