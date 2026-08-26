<template>
  <SectionContainer
    tag="Our Services"
    title="The Software and Services We Offer"
    subtitle="We write clean, simple, and secure code to solve your business needs and make your products run smoothly."
  >
    <div class="services-grid">
      <BaseCard
        v-for="service in servicesData"
        :key="service.id"
        class="service-card"
      >
        <!-- Service Icon -->
        <div class="service-icon-box">
          <component :is="getIconComponent(service.icon)" class="icon-svg" />
        </div>

        <div class="service-category">
          <BaseBadge variant="yellow">{{ service.category }}</BaseBadge>
        </div>

        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-desc">{{ service.shortDescription }}</p>

        <!-- Problem Solved Callout -->
        <div class="problem-box">
          <span class="problem-label">Problem Solved:</span>
          <p class="problem-text">{{ service.problemSolved }}</p>
        </div>

        <!-- Tech Badges -->
        <div class="tech-tags">
          <span v-for="tech in service.technologies.slice(0, 3)" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>

        <!-- Action Link -->
        <div class="service-footer">
          <router-link :to="`/services/${service.slug}`" class="service-link">
            <span>Learn More & View Deliverables</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
      </BaseCard>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import { servicesData } from '@/data/services';
import {
  Code2,
  Cloud,
  Cpu,
  Network,
  ShieldCheck,
  Layout
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Code2,
  Cloud,
  Cpu,
  Network,
  ShieldCheck,
  Layout
};

const getIconComponent = (iconName: string) => iconMap[iconName] || Code2;
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--brand-yellow-light);
  border: 1px solid var(--brand-yellow-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.service-category {
  margin-bottom: var(--space-3);
}

.service-title {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-2);
}

.service-desc {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.problem-box {
  background-color: var(--bg-surface-subtle);
  border-radius: var(--radius-sm);
  padding: var(--space-3);
  margin-bottom: var(--space-4);
}

.problem-label {
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--text-primary);
  display: block;
}

.problem-text {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  margin-top: 2px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.tech-tag {
  font-size: var(--fs-xs);
  background-color: var(--bg-surface-hover);
  color: var(--text-secondary);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  border: 1px solid var(--border-color);
}

.service-footer {
  margin-top: auto;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-primary);
  transition: gap var(--transition-fast);
}

.service-link:hover {
  color: var(--brand-yellow-hover);
  gap: var(--space-3);
}
</style>
