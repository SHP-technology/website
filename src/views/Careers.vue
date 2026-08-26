<template>
  <div class="page-careers">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          Engineering Careers & Recruitment
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Join a Senior Engineering Pod & Grow Your Career
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          We offer remote flexibility, technical autonomy, competitive compensation, and direct career growth paths.
        </p>
      </div>

      <!-- Official Recruitment & Social Connect Hub -->
      <div class="mb-14 p-8 rounded-2xl bg-gradient-to-br from-white via-surface-card to-surface-subtle dark:from-zinc-900 dark:via-slate-900 dark:to-zinc-950 text-dark-text dark:text-white shadow-2xl border border-surface-subtle dark:border-zinc-800 relative overflow-hidden">
        <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span class="inline-block bg-brand-yellow text-darkText font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">Verified Recruitment Portals</span>
              <h2 class="text-2xl md:text-3xl font-extrabold text-dark-text dark:text-white">Connect With SHP Technology</h2>
              <p class="text-secondary-text dark:text-zinc-400 text-sm mt-1 max-w-xl">Explore active job listings on Indeed, follow our founder updates on Instagram, and connect with our talent team on LinkedIn & Facebook.</p>
            </div>
            <a
              :href="siteConfig.socials.indeed"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 shrink-0"
            >
              <span>💼</span>
              <span>Apply on Indeed (Senior Sales Executive)</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>

          <!-- Social Tracking Links Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              :href="siteConfig.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-xl bg-surface-card hover:bg-surface-hover dark:bg-zinc-800/80 dark:hover:bg-zinc-800 border border-surface-subtle dark:border-zinc-700/80 flex items-center gap-3 transition-all hover:-translate-y-0.5 group"
            >
              <div class="w-10 h-10 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">in</div>
              <div>
                <strong class="text-dark-text dark:text-white text-sm block group-hover:text-brand-hover transition-colors">LinkedIn Profile</strong>
                <span class="text-xs text-muted-text">@shp-technology</span>
              </div>
            </a>

            <a
              :href="siteConfig.socials.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-xl bg-surface-card hover:bg-surface-hover dark:bg-zinc-800/80 dark:hover:bg-zinc-800 border border-surface-subtle dark:border-zinc-700/80 flex items-center gap-3 transition-all hover:-translate-y-0.5 group"
            >
              <div class="w-10 h-10 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">📸</div>
              <div>
                <strong class="text-dark-text dark:text-white text-sm block group-hover:text-brand-hover transition-colors">Instagram Feed</strong>
                <span class="text-xs text-muted-text">@founder.shp</span>
              </div>
            </a>

            <a
              :href="siteConfig.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-xl bg-surface-card hover:bg-surface-hover dark:bg-zinc-800/80 dark:hover:bg-zinc-800 border border-surface-subtle dark:border-zinc-700/80 flex items-center gap-3 transition-all hover:-translate-y-0.5 group"
            >
              <div class="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">fb</div>
              <div>
                <strong class="text-dark-text dark:text-white text-sm block group-hover:text-brand-hover transition-colors">Facebook Page</strong>
                <span class="text-xs text-muted-text">SHP Technology Official</span>
              </div>
            </a>

            <a
              :href="siteConfig.socials.indeed"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-xl bg-surface-card hover:bg-surface-hover dark:bg-zinc-800/80 dark:hover:bg-zinc-800 border border-surface-subtle dark:border-zinc-700/80 flex items-center gap-3 transition-all hover:-translate-y-0.5 group"
            >
              <div class="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">🎯</div>
              <div>
                <strong class="text-dark-text dark:text-white text-sm block group-hover:text-brand-hover transition-colors">Indeed Portal</strong>
                <span class="text-xs text-muted-text">Senior Sales Exec Opening</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Perks & Benefits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="perk in perks" :key="perk.title" class="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <span class="text-2xl" aria-hidden="true">{{ perk.icon }}</span>
          <h3 class="font-bold text-darkText dark:text-white text-base">{{ perk.title }}</h3>
          <p class="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">{{ perk.desc }}</p>
        </div>
      </div>

      <div class="culture-cards">
        <div v-for="val in companyCultureValues" :key="val.title" class="val-card">
          <h3 class="val-title">{{ val.title }}</h3>
          <p class="val-desc">{{ val.description }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Hiring Process Section -->
    <SectionContainer
      tag="Hiring Workflow"
      title="Transparent 6-Step Hiring Process"
      subtitle="We respect your time. Our hiring process is practical and focuses on real-world engineering decisions."
      bg-alt
    >
      <div class="steps-grid">
        <div v-for="s in hiringProcessSteps" :key="s.step" class="hiring-step-card">
          <span class="step-num">{{ s.step }}</span>
          <h3 class="step-name">{{ s.title }}</h3>
          <p class="step-desc">{{ s.description }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Open Positions Section -->
    <SectionContainer
      tag="Openings"
      title="Current Open Positions"
      subtitle="Explore available roles. All engineering roles offer flexible remote work options and competitive packages."
    >
      <!-- Department Filter -->
      <div class="flex justify-center gap-2 mb-8" role="tablist" aria-label="Department filters">
        <button
          v-for="dept in departments"
          :key="dept"
          role="tab"
          :aria-selected="activeDept === dept"
          :class="['px-4 py-2 rounded-full text-xs font-semibold border transition-all', activeDept === dept ? 'bg-brand-yellow border-brand-yellow text-darkText shadow-sm font-bold' : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 hover:border-brand-yellow']"
          @click="activeDept = dept"
        >
          {{ dept }}
        </button>
      </div>

      <div class="jobs-grid">
        <BaseCard v-for="job in filteredJobs" :key="job.id" class="job-card">
          <div class="job-header">
            <BaseBadge variant="yellow">{{ job.department }}</BaseBadge>
            <span class="job-exp">{{ job.experienceLevel }}</span>
          </div>

          <h3 class="job-title">{{ job.title }}</h3>
          <p class="job-loc">📍 {{ job.location }} ({{ job.employmentType }})</p>
          <p class="job-desc">{{ job.shortDescription }}</p>

          <div class="job-actions">
            <BaseButton :to="`/careers/${job.slug}`" variant="primary" size="md">
              View Position & Apply
            </BaseButton>
          </div>
        </BaseCard>
      </div>

      <div class="spontaneous-apply-banner flex flex-col items-center justify-center text-center">
        <h3>Don't see the right role?</h3>
        <p class="mb-4">We are always looking for exceptional software engineers, sales executives, and cloud architects.</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <BaseButton to="/contact" variant="outline">
            Send Us Your Profile
          </BaseButton>
          <a
            :href="siteConfig.socials.indeed"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-xl bg-brand-yellow text-darkText font-bold text-xs hover:bg-brand-hover transition-colors flex items-center gap-1.5"
          >
            <span>View Indeed Listings</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { jobsData, hiringProcessSteps, companyCultureValues } from '@/data/jobs';
import { siteConfig } from '@/config/site.config';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Careers & Open Senior Engineering Roles',
  description: 'Explore job opportunities at SHP Technology. View our Indeed portal, LinkedIn, Instagram, and Facebook recruitment channels.'
});

const activeDept = ref('All');
const departments = ['All', 'Engineering', 'DevOps', 'Data & AI'];

const filteredJobs = computed(() => {
  if (activeDept.value === 'All') return jobsData;
  return jobsData.filter((j) => j.department === activeDept.value);
});

const perks = [
  { icon: '🌎', title: '100% Remote Flexibility', desc: 'Work from anywhere with home office setup stipends.' },
  { icon: '🏖️', title: 'Unlimited Paid Off', desc: 'Mandatory 3-week minimum annual vacation policy.' },
  { icon: '📚', title: '$3,000 Learning Budget', desc: 'Annual budget for tech conferences, books, and courses.' },
  { icon: '🏥', title: 'Comprehensive Care', desc: 'Full medical, dental, vision & health coverage.' }
];
</script>

<style scoped>
.culture-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .culture-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .culture-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

.val-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.val-title {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.val-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.hiring-step-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.step-num {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--brand-yellow-hover);
  display: block;
  margin-bottom: var(--space-2);
}

.step-name {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.step-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
}

.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

@media (min-width: 768px) {
  .jobs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.job-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.job-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.job-exp {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  font-weight: 600;
}

.job-title {
  font-size: var(--fs-xl);
  margin-bottom: 2px;
}

.job-loc {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  margin-bottom: var(--space-3);
}

.job-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.job-actions {
  margin-top: auto;
}

.spontaneous-apply-banner {
  background-color: var(--bg-surface-subtle);
  color: var(--text-primary);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
}

.spontaneous-apply-banner h3 {
  color: var(--text-primary);
  font-size: var(--fs-2xl);
  margin-bottom: var(--space-2);
}

.spontaneous-apply-banner p {
  color: var(--text-secondary);
}
</style>
