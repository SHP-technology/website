<template>
  <SectionContainer
    tag="Project Estimator"
    title="Estimate Your Project Requirements & Timeline"
    subtitle="Select your target architecture and project scope to see recommended timelines, team composition, and core deliverables."
    bg-alt
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Selector Card -->
      <div class="bg-surface-card border border-surface-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <BaseSelect
          id="project-domain"
          v-model="selectedDomain"
          label="1. Select Service Domain"
          :options="domainOptions"
        />

        <div>
          <label class="text-sm font-bold text-darkText block mb-2">2. Estimated Team Scale:</label>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="scale in teamScales"
              :key="scale.id"
              type="button"
              :class="['p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all', selectedScale === scale.id ? 'border-brand-yellow bg-brand-light text-darkText dark:text-brand-yellow font-bold' : 'border-surface-subtle text-secondaryText']"
              @click="selectedScale = scale.id"
            >
              <span>{{ scale.label }}</span>
              <span class="text-[10px] text-gray-400">{{ scale.desc }}</span>
            </button>
          </div>
        </div>

        <div>
          <label class="text-sm font-bold text-darkText block mb-2">3. Target SLA & Compliance:</label>
          <div class="flex flex-wrap gap-2">
            <label v-for="comp in complianceOptions" :key="comp" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-subtle bg-surface-subtle text-xs font-medium text-darkText cursor-pointer">
              <input type="checkbox" :value="comp" v-model="selectedCompliance" class="accent-brand-yellow" />
              <span>{{ comp }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Result Summary Card -->
      <div class="bg-surface-dark text-white rounded-2xl p-6 border border-gray-800 shadow-lg flex flex-col justify-between h-full">
        <div>
          <span class="inline-block bg-brand-light text-darkText text-xs font-bold px-3 py-1 rounded-full mb-4">Estimated Scope</span>
          <h3 class="text-2xl font-bold text-white mb-2">{{ activeEstimation.title }}</h3>
          <p class="text-zinc-400 text-sm mb-6">{{ activeEstimation.description }}</p>

          <div class="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700">
            <div>
              <span class="text-xs text-zinc-400 block">Est. Timeline:</span>
              <span class="text-xl font-extrabold text-brand-yellow">{{ activeEstimation.timeline }}</span>
            </div>
            <div>
              <span class="text-xs text-zinc-400 block">Core Architecture:</span>
              <span class="text-sm font-bold text-emerald-400">{{ activeEstimation.arch }}</span>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Included Deliverables:</h4>
            <ul class="space-y-2">
              <li v-for="deliv in activeEstimation.deliverables" :key="deliv" class="flex items-center gap-2 text-xs text-zinc-200">
                <span class="text-brand-yellow">✓</span>
                <span>{{ deliv }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-4 border-t border-zinc-800">
          <BaseButton to="/contact" variant="primary" full-width>
            Request Official Proposal for This Scope
          </BaseButton>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';

type DomainType = 'enterprise' | 'cloud' | 'ai' | 'distributed';
type ScaleType = 'pod' | 'team' | 'department';

const selectedDomain = ref<DomainType>('enterprise');
const selectedScale = ref<ScaleType>('pod');
const selectedCompliance = ref<string[]>(['SOC 2 Type II']);

const domainOptions = [
  { value: 'enterprise', label: 'Custom Enterprise Web Application' },
  { value: 'cloud', label: 'Cloud Migration & Kubernetes DevOps' },
  { value: 'ai', label: 'AI LLM & RAG Vector Integration' },
  { value: 'distributed', label: 'High-Throughput Microservices Backend' }
];

const teamScales: Array<{ id: ScaleType; label: string; desc: string }> = [
  { id: 'pod', label: 'Dedicated Pod', desc: '2-3 Senior Engineers' },
  { id: 'team', label: 'Full Team', desc: '4-6 Senior Engineers' },
  { id: 'department', label: 'Enterprise Scale', desc: '7+ Engineers & Leads' }
];

const complianceOptions = ['SOC 2 Type II', 'HIPAA Compliant', '99.999% SLA', 'ISO 27001'];

const estimations = {
  enterprise: {
    title: 'Enterprise Web Application Platform',
    description: 'Bespoke full-stack Vue 3 + Node.js application with design system and microservices API integration.',
    timeline: '6 - 12 Weeks',
    arch: 'Vue 3 / TypeScript / PostgreSQL',
    deliverables: [
      'Full Vue 3 Production Component Design System',
      'Node.js REST/GraphQL Microservices',
      'Automated CI/CD Deployment Pipelines',
      'Complete Technical Documentation & Handoff'
    ]
  },
  cloud: {
    title: 'Cloud Infrastructure & DevOps Pipeline',
    description: 'High-availability Kubernetes deployment on AWS/GCP with Infrastructure as Code automation.',
    timeline: '4 - 8 Weeks',
    arch: 'Terraform / EKS / Docker / ArgoCD',
    deliverables: [
      'Multi-region EKS/GKE Kubernetes Architecture',
      'Terraform Infrastructure as Code Repository',
      'Zero-Downtime Rolling Release CI/CD',
      'Prometheus & Datadog Monitoring Setup'
    ]
  },
  ai: {
    title: 'AI RAG Engine & Semantic Search',
    description: 'Enterprise Retrieval-Augmented Generation knowledge pipeline with private LLM integration.',
    timeline: '4 - 10 Weeks',
    arch: 'Python / LangChain / Pinecone / FastAPI',
    deliverables: [
      'Encrypted Vector Database Knowledge Pipeline',
      'Semantic Search API & Admin Control Panel',
      'Private LLM Endpoint Deployment',
      'Security & Data Governance Safeguards'
    ]
  },
  distributed: {
    title: 'High-Throughput Microservices Engine',
    description: 'Event-driven messaging backend engineered for sub-100ms API response latency under high load.',
    timeline: '8 - 14 Weeks',
    arch: 'Go / Kafka / Redis / PostgreSQL',
    deliverables: [
      'Apache Kafka Real-Time Event Bus',
      'Sub-100ms Redis Caching Layer',
      'High-Concurrency Microservices Engine',
      'Load Testing & Benchmark Audit Report'
    ]
  }
};

const activeEstimation = computed(() => estimations[selectedDomain.value]);
</script>
