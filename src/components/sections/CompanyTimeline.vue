<template>
  <SectionContainer
    tag="Our Journey"
    title="Milestones & Engineering Evolution"
    subtitle="A timeline of our key open source projects and engineering milestones since 2024."
  >
    <div class="relative border-l-2 border-brand-yellow dark:border-brand-hover ml-4 md:ml-32 space-y-8 py-4">
      <div v-for="item in milestones" :key="item.year" class="relative pl-6 md:pl-8 group">
        <!-- Dot -->
        <span class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-yellow border-2 border-white dark:border-zinc-900 group-hover:scale-125 transition-transform"></span>

        <!-- Year badge on left for desktop -->
        <span class="hidden md:block absolute -left-28 top-1 text-sm font-extrabold text-brand-hover dark:text-brand-yellow font-mono">
          {{ item.year }}
        </span>

        <!-- Content Card -->
        <div class="bg-surface-card border border-surface-subtle rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <span class="md:hidden inline-block bg-brand-light text-darkText font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-full mb-2">{{ item.year }}</span>
          <h3 class="text-xl font-bold text-darkText mb-2">{{ item.title }}</h3>
          <p class="text-secondaryText text-sm leading-relaxed mb-4">{{ item.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span v-for="tag in item.highlights" :key="tag" class="text-xs bg-surface-subtle text-secondaryText px-2.5 py-1 rounded-md border border-surface-subtle">
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
    title: 'Collaborative Web Apps & Frontend Portals',
    description: 'Developing highly interactive web applications utilizing TypeScript and modern frontend frameworks, focused on real-time sync and markdown engines.',
    highlights: ['File-Share Vault', 'Jarvis AI Chat Portal']
  }
];
</script>
