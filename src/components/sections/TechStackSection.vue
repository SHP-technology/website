<template>
  <SectionContainer
    tag="Our Tech Stack"
    title="The Technology Tools We Use"
    subtitle="We choose popular, fast, and safe programming tools to build software that is easy to update and runs without breaking."
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="cat in techStackData"
        :key="cat.category"
        class="p-6 md:p-8 rounded-2xl transition-all duration-300 backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md hover:shadow-xl dark:shadow-2xl"
      >
        <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-6 pb-2 border-b-2 border-brand-yellow inline-block">{{ cat.category }}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="item in cat.items"
            :key="item.name"
            class="p-4 rounded-xl backdrop-blur-md bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/10 shadow-xs hover:border-brand-yellow/50 transition-colors"
          >
            <div class="flex items-center gap-2 mb-1">
              <span class="text-brand-hover dark:text-brand-yellow text-xs font-black">⚡</span>
              <span class="text-sm font-bold text-slate-900 dark:text-white">{{ item.name }}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { techStackData } from '@/data/techStack';
</script>
