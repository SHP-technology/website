<template>
  <div class="page-demo">
    <SectionContainer>
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-10 animate-fade-in-up">
          <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
            Live Demonstration
          </span>
          <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
            Request a Live Guided Demo
          </h1>
          <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
            Fill out the form below and our team will get in touch to schedule a live, personalized walkthrough of our software platforms.
          </p>
        </div>

        <div class="demo-card bg-surface-card text-primary-text p-6 md:p-8 rounded-3xl border border-surface-subtle shadow-lg animate-fade-in-up">
          <DemoRequestForm />
        </div>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import DemoRequestForm from '@/components/forms/DemoRequestForm.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Request a Live Guided Demo',
  description: 'Fill out our inquiry form to schedule a live, personalized walkthrough of our custom software platforms.'
});
</script>
