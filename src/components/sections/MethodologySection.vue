<template>
  <SectionContainer
    tag="How We Work"
    title="How We Work With You Step by Step"
    subtitle="We follow a simple 6-step plan to design, build, test, and launch your software without any surprises."
    bg-alt
  >
    <div class="methodology-grid">
      <div
        v-for="step in processSteps"
        :key="step.number"
        class="step-card"
      >
        <div class="step-header">
          <span class="step-number">{{ step.number }}</span>
          <div class="step-icon-bg">
            <component :is="step.icon" class="step-icon" />
          </div>
        </div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-desc">{{ step.description }}</p>
        <ul class="step-outcomes">
          <li v-for="outcome in step.outcomes" :key="outcome">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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

<style scoped>
.methodology-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .methodology-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .methodology-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: relative;
  transition: all var(--transition-normal);
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--brand-yellow);
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.step-number {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--brand-yellow-hover);
  letter-spacing: -0.05em;
}

.step-icon-bg {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: var(--bg-surface-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.step-icon {
  width: 20px;
  height: 20px;
}

.step-title {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.step-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.step-outcomes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px dashed var(--border-color);
}

.step-outcomes li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--text-primary);
}
</style>
