<template>
  <div v-if="service" class="page-service-detail">
    <SectionContainer>
      <div class="mb-6">
        <router-link to="/services" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-hover dark:hover:text-brand-yellow transition-colors">← Back to All Services</router-link>
      </div>

      <div class="flex flex-col items-start gap-3 mb-12 pb-8 border-b border-slate-200 dark:border-white/10">
        <BaseBadge variant="yellow">{{ service.category }}</BaseBadge>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">{{ service.title }}</h1>
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">{{ service.fullDescription }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <!-- Main Column -->
        <div class="flex flex-col gap-8">
          <!-- Problem & Solution Breakdown -->
          <div class="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Problem We Solve</h3>
            <div class="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border-l-4 border-amber-500 text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              {{ service.problemSolved }}
            </div>
          </div>

          <!-- Benefits -->
          <div class="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Advantages & Value Delivered</h3>
            <ul class="flex flex-col gap-3">
              <li v-for="b in service.benefits" :key="b" class="flex items-start gap-3 text-base text-slate-700 dark:text-slate-200">
                <span class="text-brand-hover dark:text-brand-yellow shrink-0">✦</span>
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>

          <!-- Deliverables -->
          <div class="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Deliverables</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="d in service.deliverables" :key="d" class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
                <span class="text-base">📦</span>
                <span>{{ d }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Inquiry Card -->
        <div>
          <div class="sticky top-28 p-6 rounded-2xl bg-slate-900 dark:bg-slate-900/90 text-white border border-slate-800 dark:border-white/15 shadow-2xl flex flex-col gap-4">
            <h3 class="text-xl font-bold text-white">Schedule a Service Consultation</h3>
            <p class="text-sm text-slate-300">Speak with a senior solutions architect specialized in {{ service.title }}.</p>
            <div class="text-xs">
              <strong class="text-slate-400 block mb-2">Technologies Used:</strong>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in service.technologies" :key="t" class="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 font-semibold text-xs border border-slate-700">{{ t }}</span>
              </div>
            </div>
            <BaseButton to="/contact" variant="primary" full-width class="mt-2">
              Inquire About {{ service.title }}
            </BaseButton>
          </div>
        </div>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
  <div v-else class="container section-padding text-center">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Service Not Found</h2>
    <BaseButton to="/services" variant="outline" class="mt-4">Back to Services</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { servicesData } from '@/data/services';
import { useSeoMeta } from '@/composables/useSeoMeta';

const route = useRoute();
const service = computed(() => servicesData.find((s) => s.slug === route.params.slug));

useSeoMeta(() => service.value
  ? {
      title: `${service.value.title} — Software Development Service`,
      description: service.value.shortDescription,
      keywords: `${service.value.title}, custom software development, enterprise software, ${service.value.technologies.join(', ')}, SHP Technology services`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.value.title,
        description: service.value.shortDescription,
        provider: {
          '@type': 'Organization',
          name: 'SHP Technology',
          url: 'https://www.shptechnology.online/'
        },
        areaServed: 'Worldwide',
        serviceType: service.value.category
      }
    }
  : {
      title: 'Service Not Found',
      description: 'The requested SHP Technology service page could not be found.',
      noIndex: true
    });
</script>
