<template>
  <SectionContainer
    tag="Our Work"
    title="Our Work & What We Solved"
    subtitle="Read stories about how we helped real businesses make their websites faster, improve their servers, and solve big problems."
    bg-alt
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <BaseCard
        v-for="item in featuredItems"
        :key="item.id"
        :glass="true"
        class="flex flex-col h-full"
      >
        <div class="flex items-center justify-between mb-4">
          <BaseBadge variant="dark">{{ item.industry }}</BaseBadge>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">{{ item.completionYear }}</span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">{{ item.title }}</h3>
        <p class="text-xs font-semibold text-brand-hover dark:text-brand-yellow mb-3">Client: {{ item.client }}</p>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{{ item.summary }}</p>

        <!-- Measurable Results Grid -->
        <div class="p-4 rounded-xl backdrop-blur-md bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/10 mb-6 flex flex-col gap-3 shadow-xs">
          <div v-for="res in item.results" :key="res.label" class="flex flex-col">
            <span class="text-xl font-extrabold text-slate-900 dark:text-white leading-none">{{ res.metric }}</span>
            <span class="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">{{ res.label }}</span>
          </div>
        </div>

        <div class="mt-auto flex items-center justify-between gap-2 pt-2">
          <div class="flex flex-wrap gap-1">
            <span v-for="t in item.technologies.slice(0, 3)" :key="t" class="text-[11px] font-medium px-2 py-0.5 rounded backdrop-blur-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              {{ t }}
            </span>
          </div>
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-brand-hover dark:text-brand-yellow hover:underline">
            <span>Launch Live Demo 🚀</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <router-link v-else :to="`/portfolio/${item.slug}`" class="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white hover:text-brand-hover dark:hover:text-brand-yellow transition-colors">
            <span>Read Case Study</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
      </BaseCard>
    </div>

    <div class="text-center">
      <BaseButton to="/portfolio" variant="outline" size="md">
        View All Case Studies
      </BaseButton>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { portfolioData } from '@/data/portfolio';

const featuredItems = computed(() => portfolioData.filter((i) => i.featured));
</script>
