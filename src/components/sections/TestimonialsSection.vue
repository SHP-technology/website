<template>
  <SectionContainer
    tag="Happy Customers"
    title="What Our Happy Clients Say"
    subtitle="Read reviews from real business owners and managers who hired us to build their software projects."
    bg-alt
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <BaseCard v-for="t in testimonialsData" :key="t.id" class="flex flex-col justify-between h-full">
        <div>
          <!-- Star Rating -->
          <div class="flex text-brand-hover gap-1 mb-4">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <p class="text-darkText dark:text-zinc-200 text-sm leading-relaxed italic mb-6">
            "{{ t.quote }}"
          </p>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
          <div class="w-10 h-10 rounded-full bg-brand-light dark:bg-zinc-800 border border-brand-border text-darkText dark:text-brand-yellow font-extrabold text-sm flex items-center justify-center">
            {{ t.avatar }}
          </div>
          <div>
            <h4 class="font-bold text-sm text-darkText dark:text-white leading-tight">{{ t.author }}</h4>
            <p class="text-xs text-gray-500 dark:text-zinc-400">{{ t.role }} • <strong class="text-sky-600 dark:text-sky-400 font-semibold">{{ t.company }}</strong></p>
          </div>
        </div>
      </BaseCard>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import { testimonialsData } from '@/data/testimonials';
</script>
