<template>
  <SectionContainer
    tag="Our Journey"
    title="Milestones & Engineering Evolution"
    subtitle="A timeline of our key open source projects and engineering milestones since 2024."
  >
    <div class="relative border-l-2 border-amber-400 dark:border-amber-400 ml-4 md:ml-32 space-y-8 py-4">
      <div v-for="item in milestones" :key="item.year" class="relative pl-6 md:pl-8 group">
        <!-- Dot -->
        <span class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-amber-400 border-2 border-white dark:border-slate-900 group-hover:scale-125 transition-transform shadow-xs"></span>

        <!-- Year badge on left for desktop -->
        <span class="hidden md:block absolute -left-28 top-1.5 text-sm font-extrabold text-amber-600 dark:text-amber-400 font-mono">
          {{ item.year }}
        </span>

        <!-- Content Card -->
        <div class="p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/65 border border-slate-200/80 dark:border-white/12 shadow-md hover:shadow-lg transition-all">
          <span class="md:hidden inline-block bg-amber-500/15 text-amber-800 dark:text-amber-300 font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-full mb-2 border border-amber-500/30">{{ item.year }}</span>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ item.title }}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{{ item.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span v-for="tag in item.highlights" :key="tag" class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 font-medium">
              ⚡ {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';

const milestones = [
  {
    year: '2024',
    title: 'Early Automation & Web Projects',
    description: 'Began publishing open-source applications, building desktop voice control assistants, system scripting, and responsive web portals.',
    highlights: ['Voice Assistant in Python', 'E-commerce & Web Prototypes']
  },
  {
    year: '2025',
    title: 'Systems Utilities & AI Orchestration',
    description: 'Expanded into systems utility development in Go and created the Jarvis AI backend orchestrator for managing local scripts and agent tool calling.',
    highlights: ['Mini-Tracker in Go', 'Jarvis AI Core Backend']
  },
  {
    year: '2026 - Present',
    title: 'Custom Software & Business Growth',
    description: 'Developed ready-to-use software and digital solutions for businesses, helping them automate processes, improve customer experience, and build a stronger online presence.',
    highlights: ['Custom Software', 'Business Automation']
  }
];
</script>
