<template>
  <SectionContainer
    tag="Our Journey"
    title="Milestones & Engineering Evolution"
    subtitle="From our founding in 2019 to managing enterprise cloud systems for global industry leaders."
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
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <span class="md:hidden inline-block bg-brand-light text-darkText font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-full mb-2">{{ item.year }}</span>
          <h3 class="text-xl font-bold text-darkText dark:text-white mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed mb-4">{{ item.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span v-for="tag in item.highlights" :key="tag" class="text-xs bg-surface-subtle dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-gray-200 dark:border-zinc-700">
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
    year: '2019',
    title: 'Company Founding in Jabalpur',
    description: 'Established SHP Technology with a focus on senior cloud-native engineering and high-availability architecture consultancy.',
    highlights: ['First 5 Enterprise Clients', 'AWS Partner Network']
  },
  {
    year: '2021',
    title: 'Expansion into Distributed Microservices',
    description: 'Built our high-throughput Kafka & Go processing engine framework, achieving sub-100ms payment execution SLA.',
    highlights: ['Go & Kafka Architecture', '50+ Production Deployments']
  },
  {
    year: '2023',
    title: 'AI RAG & Vector Knowledge Practice',
    description: 'Launched our dedicated AI integration unit, delivering HIPAA-compliant clinical document vector search platforms.',
    highlights: ['Vector Search Engines', 'Private LLM Integrations']
  },
  {
    year: '2025 - Present',
    title: 'Global Senior Engineering Team & Rebranding',
    description: 'Expanded global engineering team across 12 countries while maintaining 99.99% operational uptime SLA across all client workloads.',
    highlights: ['140+ Production Releases', '99.999% SLA Track Record']
  }
];
</script>
