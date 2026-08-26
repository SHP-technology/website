<template>
  <SectionContainer
    tag="Our Work"
    title="Our Work & What We Solved"
    subtitle="Read stories about how we helped real businesses make their websites faster, improve their servers, and solve big problems."
    bg-alt
  >
    <div class="portfolio-grid">
      <BaseCard
        v-for="item in featuredItems"
        :key="item.id"
        class="case-card"
      >
        <div class="case-header">
          <BaseBadge variant="dark">{{ item.industry }}</BaseBadge>
          <span class="completion-year">{{ item.completionYear }}</span>
        </div>

        <h3 class="case-title">{{ item.title }}</h3>
        <p class="case-client">Client: {{ item.client }}</p>
        <p class="case-summary">{{ item.summary }}</p>

        <!-- Measurable Results Grid -->
        <div class="results-box">
          <div v-for="res in item.results" :key="res.label" class="res-item">
            <span class="res-metric">{{ res.metric }}</span>
            <span class="res-label">{{ res.label }}</span>
          </div>
        </div>

        <div class="case-footer">
          <div class="tech-stack-mini">
            <span v-for="t in item.technologies.slice(0, 3)" :key="t" class="mini-tag">
              {{ t }}
            </span>
          </div>
          <router-link :to="`/portfolio/${item.slug}`" class="case-link">
            <span>Read Case Study</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
      </BaseCard>
    </div>

    <div class="view-all-wrapper">
      <BaseButton to="/portfolio" variant="outline" size="md">
        View All Case Studies
      </BaseButton>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { portfolioData } from '@/data/portfolio';

const featuredItems = computed(() => portfolioData.filter((i) => i.featured));
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.case-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.case-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.completion-year {
  font-size: var(--fs-xs);
  color: var(--text-muted);
  font-weight: 600;
}

.case-title {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-1);
  line-height: 1.3;
}

.case-client {
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--brand-yellow-hover);
  margin-bottom: var(--space-3);
}

.case-summary {
  font-size: var(--fs-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.results-box {
  background-color: var(--bg-surface-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  border: 1px solid var(--border-color);
}

.res-metric {
  font-size: var(--fs-xl);
  font-weight: 800;
  color: var(--text-primary);
  display: block;
}

.res-label {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.case-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.tech-stack-mini {
  display: flex;
  gap: var(--space-1);
}

.mini-tag {
  font-size: var(--fs-xs);
  background-color: var(--bg-surface-hover);
  padding: 2px 6px;
  border-radius: var(--radius-xs);
  color: var(--text-secondary);
}

.case-link {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--text-primary);
}

.case-link:hover {
  color: var(--brand-yellow-hover);
}

.view-all-wrapper {
  text-align: center;
}
</style>
