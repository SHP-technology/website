<template>
  <SectionContainer
    tag="How We Work"
    title="How We Work With You Step by Step"
    subtitle="We follow a simple 6-step plan to design, build, test, and launch your software without any surprises."
    bg-alt
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="step in processSteps"
        :key="step.number"
        class="relative p-6 md:p-8 rounded-2xl transition-all duration-300 backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md hover:shadow-xl dark:shadow-2xl hover:-translate-y-1 hover:border-brand-hover dark:hover:border-brand-yellow"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl font-extrabold text-brand-hover dark:text-brand-yellow tracking-tight">{{ step.number }}</span>
          <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm">
            <component :is="step.icon" class="w-5 h-5" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ step.title }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{{ step.description }}</p>
        <ul class="pt-4 border-t border-dashed border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
          <li v-for="outcome in step.outcomes" :key="outcome" class="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-brand-hover dark:text-brand-yellow shrink-0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{{ outcome }}</span>
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import {
  Search,
  FileText,
  Code,
  CheckCircle2,
  Rocket,
  TrendingUp
} from 'lucide-vue-next';

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    icon: Search,
    description: 'We talk with you to understand your goals, look at what you already have, and plan the project before we start writing code.',
    outcomes: ['Project Goals', 'System Check', 'Feature List']
  },
  {
    number: '02',
    title: 'Plan',
    icon: FileText,
    description: 'We plan how the database works, what programming tools to use, and write a schedule for when each part will be finished.',
    outcomes: ['Step-by-step Plan', 'Database Blueprint', 'Project Schedule']
  },
  {
    number: '03',
    title: 'Build',
    icon: Code,
    description: 'We write clean, safe, and organized code to build your website, database features, and server tools.',
    outcomes: ['Website Layouts', 'Server Code', 'Automated Builders']
  },
  {
    number: '04',
    title: 'Test',
    icon: CheckCircle2,
    description: 'We test everything carefully to make sure the application is secure, fast, and does not break when users visit.',
    outcomes: ['Thorough Testing', 'Speed Checks', 'Security Scan']
  },
  {
    number: '05',
    title: 'Deploy',
    icon: Rocket,
    description: 'We upload your new software to secure servers online so your customers can access it without any downtime.',
    outcomes: ['Live Website Launch', 'SSL Security Setup', 'Domain Linking']
  },
  {
    number: '06',
    title: 'Improve',
    icon: TrendingUp,
    description: 'We monitor your servers, keep them running smoothly, and make updates whenever you need new features.',
    outcomes: ['24/7 Health Tracking', 'Performance Tuning', 'New Feature Updates']
  }
];
</script>
