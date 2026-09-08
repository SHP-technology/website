<template>
  <SectionContainer
    tag="High-Speed, Low-Cost Services"
    title="Premium Engineering at an Unbeatable Value"
    subtitle="We write clean, secure code and deploy robust systems incredibly fast—saving you both time and money."
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BaseCard
        v-for="service in servicesData"
        :key="service.id"
        :glass="true"
        class="flex flex-col h-full"
      >
        <!-- Service Icon -->
        <div class="w-12 h-12 rounded-xl backdrop-blur-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center justify-center text-brand-hover dark:text-brand-yellow mb-4 shadow-sm">
          <component :is="getIconComponent(service.icon)" class="w-6 h-6" />
        </div>

        <div class="mb-3">
          <BaseBadge variant="yellow">{{ service.category }}</BaseBadge>
        </div>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">{{ service.title }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{{ service.shortDescription }}</p>

        <!-- Problem Solved Callout -->
        <div class="p-3.5 rounded-xl backdrop-blur-md bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/10 mb-4 shadow-xs">
          <span class="text-xs font-bold text-slate-900 dark:text-white block">Problem Solved:</span>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-normal">{{ service.problemSolved }}</p>
        </div>

        <!-- Tech Badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in service.technologies.slice(0, 3)" :key="tech" class="text-xs font-medium px-2.5 py-0.5 rounded-full backdrop-blur-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
            {{ tech }}
          </span>
        </div>

        <!-- Action Link -->
        <div class="mt-auto">
          <router-link :to="`/services/${service.slug}`" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-hover dark:hover:text-brand-yellow transition-colors group">
            <span>Learn More & View Deliverables</span>
            <svg class="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
      </BaseCard>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import { servicesData } from '@/data/services';
import {
  Code2,
  Cloud,
  Cpu,
  Network,
  ShieldCheck,
  Layout
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Code2,
  Cloud,
  Cpu,
  Network,
  ShieldCheck,
  Layout
};

const getIconComponent = (iconName: string) => iconMap[iconName] || Code2;
</script>
