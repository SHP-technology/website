<template>
  <SectionContainer
    tag="Project Estimator"
    title="Estimate Your Project Cost & Timeline"
    subtitle="Select your project type and team size to see estimated costs, completion time, and what deliverables you receive."
    bg-alt
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Selector Card -->
      <div class="bg-surface-card border border-surface-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <BaseSelect
          id="project-domain"
          v-model="selectedDomain"
          label="1. Select What You Want to Build"
          :options="domainOptions"
        />

        <div>
          <label class="text-sm font-bold text-primaryText block mb-2">2. Select Team Size:</label>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="scale in teamScales"
              :key="scale.id"
              type="button"
              :class="['p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all', selectedScale === scale.id ? 'border-brand-yellow bg-brand-light text-slate-950 dark:text-brand-yellow font-bold shadow-sm' : 'border-surface-subtle text-secondaryText hover:border-brand-yellow']"
              @click="selectedScale = scale.id"
            >
              <span>{{ scale.label }}</span>
              <span class="text-[10px] text-mutedText">{{ scale.desc }}</span>
            </button>
          </div>
        </div>

        <div>
          <label class="text-sm font-bold text-primaryText block mb-2">3. Requirements & Guarantees:</label>
          <div class="flex flex-wrap gap-2">
            <label v-for="comp in complianceOptions" :key="comp" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-subtle bg-surface-subtle text-xs font-medium text-primaryText cursor-pointer hover:border-slate-300 dark:hover:border-slate-700">
              <input type="checkbox" :value="comp" v-model="selectedCompliance" class="accent-brand-yellow" />
              <span>{{ comp }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Result Summary Card -->
      <div class="bg-surface-card text-primaryText rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-block bg-brand-yellow text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full">Estimated Project Summary</span>
            <span class="text-xs text-brand-sky font-semibold">Transparent Estimate</span>
          </div>

          <h3 class="text-2xl font-bold text-primaryText mb-2">{{ activeEstimation.title }}</h3>
          <p class="text-secondaryText text-sm mb-6 leading-relaxed">{{ activeEstimation.description }}</p>

          <!-- 3-Column Key Metrics Box -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-surface-subtle border border-slate-200 dark:border-slate-700">
            <div>
              <span class="text-[11px] text-secondaryText font-semibold block mb-0.5 uppercase tracking-wider">Est. Budget Range:</span>
              <span class="text-base font-extrabold text-brand-hover dark:text-brand-yellow block">{{ activeBudgetRange }}</span>
            </div>
            <div>
              <span class="text-[11px] text-secondaryText font-semibold block mb-0.5 uppercase tracking-wider">Est. Timeline:</span>
              <span class="text-base font-extrabold text-primaryText block">{{ activeEstimation.timeline }}</span>
            </div>
            <div>
              <span class="text-[11px] text-secondaryText font-semibold block mb-0.5 uppercase tracking-wider">Technology Used:</span>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">{{ activeEstimation.arch }}</span>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold text-secondaryText uppercase tracking-wider mb-3">Included What You Get (Deliverables):</h4>
            <ul class="space-y-2.5">
              <li v-for="deliv in activeEstimation.deliverables" :key="deliv" class="flex items-start gap-2.5 text-xs text-primaryText font-medium">
                <span class="text-brand-hover dark:text-brand-yellow font-bold text-sm shrink-0">✓</span>
                <span class="leading-normal">{{ deliv }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
          <BaseButton to="/contact" variant="primary" full-width>
            Request Exact Quotation for This Scope
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
const selectedCompliance = ref<string[]>(['Security Backup']);

const domainOptions = [
  { value: 'enterprise', label: 'Custom Website & Web Application' },
  { value: 'cloud', label: 'Cloud Server Setup & 24/7 Support' },
  { value: 'ai', label: 'Smart AI Assistant & Document Search' },
  { value: 'distributed', label: 'Fast Database & High-Speed Software' }
];

const teamScales: Array<{ id: ScaleType; label: string; desc: string }> = [
  { id: 'pod', label: 'Small Team', desc: '2-3 Developers' },
  { id: 'team', label: 'Full Team', desc: '4-6 Developers' },
  { id: 'department', label: 'Large Scale', desc: '7+ Developers & Leads' }
];

const complianceOptions = ['Security Backup', '99.9% Uptime Guarantee', 'Data Protection', 'Fast SLA Support'];

const budgetRanges: Record<DomainType, Record<ScaleType, string>> = {
  enterprise: {
    pod: '₹35,000 – ₹75,000 ($450 – $950)',
    team: '₹75,000 – ₹1,50,000 ($950 – $1,900)',
    department: '₹1,50,000 – ₹3,50,000+ ($1,900 – $4,500+)'
  },
  cloud: {
    pod: '₹25,000 – ₹55,000 ($320 – $700)',
    team: '₹55,000 – ₹1,20,000 ($700 – $1,500)',
    department: '₹1,20,000 – ₹2,80,000+ ($1,500 – $3,600+)'
  },
  ai: {
    pod: '₹40,000 – ₹90,000 ($500 – $1,150)',
    team: '₹90,000 – ₹2,00,000 ($1,150 – $2,500)',
    department: '₹2,00,000 – ₹4,50,000+ ($2,500 – $5,800+)'
  },
  distributed: {
    pod: '₹35,000 – ₹80,000 ($450 – $1,000)',
    team: '₹80,000 – ₹1,80,000 ($1,000 – $2,300)',
    department: '₹1,80,000 – ₹4,00,000+ ($2,300 – $5,000+)'
  }
};

const estimations = {
  enterprise: {
    title: 'Custom Website & Business Web App',
    description: 'A complete custom website or web application built specifically for your business needs, featuring user login, database storage, and clean responsive design.',
    timeline: '3 - 6 Weeks',
    arch: 'Web App & Database',
    deliverables: [
      'Custom modern responsive website & admin control dashboard',
      'Secure customer login and database data storage',
      'Automated daily data backups and security protection',
      'Complete user training, source code, and handover guide'
    ]
  },
  cloud: {
    title: 'Cloud Server Setup & 24/7 Security',
    description: 'Professional cloud server setup (AWS / Google Cloud) ensuring your website or business app runs 24/7 fast without crashing.',
    timeline: '2 - 4 Weeks',
    arch: 'Cloud Server & Firewall',
    deliverables: [
      'High-speed cloud server setup with zero downtime',
      'Automatic daily backup and instant crash recovery',
      'Real-time server health monitoring and email alerts',
      'SSL security certificates and protection setup'
    ]
  },
  ai: {
    title: 'Smart AI Assistant & Search Tool',
    description: 'An intelligent AI assistant trained on your business documents to answer customer questions automatically and speed up daily tasks.',
    timeline: '3 - 6 Weeks',
    arch: 'AI Chatbot & Search',
    deliverables: [
      'Custom AI chatbot trained on your company files and PDFs',
      'Instant smart document search for your internal team',
      'Easy admin dashboard to upload and manage company files',
      '100% data privacy and customer chat safety safeguards'
    ]
  },
  distributed: {
    title: 'High-Speed Database & Custom Software',
    description: 'A powerful, fast database system built to process thousands of orders, entries, or customer requests per second smoothly.',
    timeline: '4 - 8 Weeks',
    arch: 'Fast Database Engine',
    deliverables: [
      'Super-fast database engine for instant page loading',
      'Real-time data synchronization across all devices',
      'Performance testing to handle heavy customer traffic',
      'Full source code ownership and technical support'
    ]
  }
};

const activeEstimation = computed(() => estimations[selectedDomain.value]);
const activeBudgetRange = computed(() => budgetRanges[selectedDomain.value][selectedScale.value]);
</script>
