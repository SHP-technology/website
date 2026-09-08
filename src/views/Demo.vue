<template>
  <div class="page-demo">
    <SectionContainer>
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-10 animate-fade-in-up">
          <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-slate-800 border border-brand-border dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primaryText mb-4">
            Interactive Product Demos
          </span>
          <h1 class="text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
            Explore Live Product Demos
          </h1>
          <p class="text-lg text-secondaryText leading-relaxed max-w-2xl mx-auto">
            Test and interact with our live software applications or request a guided walkthrough below.
          </p>
        </div>

        <!-- Featured Live Product Demos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div class="p-6 md:p-8 rounded-3xl bg-surface-card border border-surface-subtle shadow-md flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">EdTech & LMS</span>
                <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Online
                </span>
              </div>
              <h3 class="text-2xl font-bold text-primaryText mb-2">🎓 SHP E-Learning Platform</h3>
              <p class="text-sm text-secondaryText leading-relaxed mb-6">Full-featured cloud learning management system with course catalogs, student portals, video lessons, quiz attempts, and automated certificates.</p>
            </div>
            <a href="https://elearning.shptechnology.online/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-lg">
              <span>Launch E-Learning Demo 🚀</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>

          <div class="p-6 md:p-8 rounded-3xl bg-surface-card border border-surface-subtle shadow-md flex flex-col justify-between hover:border-sky-500/50 transition-all">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-500 border border-sky-500/20">Hospitality & POS</span>
                <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Online
                </span>
              </div>
              <h3 class="text-2xl font-bold text-primaryText mb-2">🍽️ SHP Restro POS System</h3>
              <p class="text-sm text-secondaryText leading-relaxed mb-6">Modern cloud-based restaurant POS and order management web system featuring real-time menu tracking, table ordering, and kitchen workflows.</p>
            </div>
            <a href="https://restro.shptechnology.online/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-lg">
              <span>Launch Restro POS Demo 🚀</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>

        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-primaryText">Request a Live Guided Walkthrough</h2>
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
