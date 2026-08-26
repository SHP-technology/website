<template>
  <div class="page-demo">
    <SectionContainer>
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-10 animate-fade-in-up">
          <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-slate-800 border border-brand-border dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primaryText mb-4">
            Free Guided Walkthrough
          </span>
          <h1 class="text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
            Request a Live Guided Demo
          </h1>
          <p class="text-lg text-secondaryText leading-relaxed">
            Choose what software or business system you want to see. We will give you a simple live walkthrough and answer all your questions.
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
