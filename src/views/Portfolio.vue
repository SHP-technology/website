<template>
  <div class="page-portfolio">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-10 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-slate-800 border border-brand-border dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primaryText mb-4">
          Case Studies & Client Results
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
          Featured Engineering Case Studies & Proven Client Impact
        </h1>
        <p class="text-lg text-secondaryText leading-relaxed">
          Explore how we built mission-critical web applications, high-throughput microservices, and multi-cloud infrastructure platforms.
        </p>
      </div>

      <!-- Filter Badges -->
      <div class="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Industry filters">
        <button
          v-for="cat in categories"
          :key="cat"
          role="tab"
          :aria-selected="activeCategory === cat"
          :class="['px-4 py-2 rounded-full text-xs font-semibold border transition-all', activeCategory === cat ? 'bg-brand-yellow border-brand-yellow text-slate-950 shadow-sm font-bold' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-secondaryText hover:border-brand-yellow']"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        <BaseCard
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card flex flex-col justify-between"
        >
          <div>
            <div class="card-meta flex justify-between items-center mb-3">
              <BaseBadge variant="yellow">{{ project.industry }}</BaseBadge>
              <span class="text-xs text-emerald-600 dark:text-emerald-400 font-bold">⚡ {{ project.results[0]?.metric }}</span>
            </div>

            <h2 class="text-2xl font-bold text-primaryText mb-2">{{ project.title }}</h2>
            <p class="text-secondaryText text-sm leading-relaxed mb-6">{{ project.summary }}</p>

            <!-- Results grid -->
            <div class="grid grid-cols-2 gap-3 mb-6 p-3.5 rounded-xl bg-surface-subtle dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <div v-for="res in project.results" :key="res.label">
                <span class="text-base font-extrabold text-primaryText block leading-none">{{ res.metric }}</span>
                <span class="text-[11px] text-secondaryText font-medium">{{ res.label }}</span>
              </div>
            </div>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span v-for="tech in project.technologies" :key="tech" class="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-secondaryText border border-slate-200 dark:border-slate-700 font-medium">
                {{ tech }}
              </span>
            </div>
          </div>

          <div>
            <BaseButton :to="`/portfolio/${project.slug}`" variant="outline" size="md" class="w-full">
              Read Technical Case Study
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { portfolioData } from '@/data/portfolio';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Engineering Case Studies & Portfolio Projects',
  description: 'Explore the personal and open source software development portfolio of Sandesh Patel, featuring AI applications, developer tools, and web services.'
});

const activeCategory = ref('All');
const categories = ['All', 'Developer Tools', 'Artificial Intelligence'];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return portfolioData;
  return portfolioData.filter((p) => p.industry === activeCategory.value);
});
</script>
