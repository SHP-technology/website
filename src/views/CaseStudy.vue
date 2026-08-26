<template>
  <div v-if="study" class="page-case-study">
    <SectionContainer>
      <div class="breadcrumb">
        <router-link to="/portfolio">← Back to All Case Studies</router-link>
      </div>

      <div class="case-banner">
        <BaseBadge variant="yellow">{{ study.industry }}</BaseBadge>
        <h1 class="study-title">{{ study.title }}</h1>
        <p class="study-client">Client: {{ study.client }} | Year: {{ study.completionYear }}</p>
      </div>

      <div class="study-content-grid">
        <div class="main-body">
          <!-- Challenge -->
          <div class="body-block">
            <h2>The Challenge</h2>
            <p>{{ study.challenge }}</p>
          </div>

          <!-- Solution -->
          <div class="body-block">
            <h2>Our Technical Solution</h2>
            <p>{{ study.solution }}</p>
          </div>

          <!-- Key Results -->
          <div class="body-block">
            <h2>Measurable Impact & Results</h2>
            <div class="impact-cards">
              <div v-for="res in study.results" :key="res.label" class="impact-item">
                <span class="imp-metric">{{ res.metric }}</span>
                <span class="imp-label">{{ res.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Specs -->
        <div class="study-sidebar">
          <div class="specs-card">
            <h3>Case Study Info</h3>
            <div class="spec-group">
              <strong>Industry</strong>
              <p>{{ study.industry }}</p>
            </div>
            <div class="spec-group">
              <strong>Technologies Used</strong>
              <div class="tech-stack-flex">
                <span v-for="t in study.technologies" :key="t" class="tech-tag-badge">{{ t }}</span>
              </div>
            </div>
            <BaseButton to="/contact" variant="primary" full-width>
              Discuss a Similar Project
            </BaseButton>
          </div>
        </div>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
  <div v-else class="container section-padding text-center">
    <h2>Case Study Not Found</h2>
    <BaseButton to="/portfolio" variant="outline" class="mt-4">Back to Portfolio</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { portfolioData } from '@/data/portfolio';
import { useSeoMeta } from '@/composables/useSeoMeta';

const route = useRoute();
const study = computed(() => portfolioData.find((p) => p.slug === route.params.slug));

useSeoMeta(() => study.value
  ? {
      title: study.value.title,
      description: study.value.summary,
      keywords: `${study.value.industry} software project, ${study.value.technologies.join(', ')}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: study.value.title,
        description: study.value.summary,
        dateCreated: study.value.completionYear,
        creator: { '@type': 'Organization', name: 'SHP Technology' }
      }
    }
  : {
      title: 'Case Study Not Found',
      description: 'The requested SHP Technology case study could not be found.',
      noIndex: true
    });
</script>

<style scoped>
.breadcrumb {
  margin-bottom: var(--space-6);
  font-size: var(--fs-sm);
}

.breadcrumb a {
  color: var(--text-secondary);
  font-weight: 600;
}

.breadcrumb a:hover {
  color: var(--brand-yellow-hover);
}

.case-banner {
  margin-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.study-title {
  font-size: var(--fs-4xl);
  color: var(--text-primary);
}

.study-client {
  font-size: var(--fs-base);
  font-weight: 700;
  color: var(--brand-yellow-hover);
}

.study-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .study-content-grid {
    grid-template-columns: 2fr 1fr;
  }
}

.main-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.body-block {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.body-block h2 {
  font-size: var(--fs-2xl);
  margin-bottom: var(--space-4);
}

.body-block p {
  font-size: var(--fs-base);
  line-height: 1.7;
}

.impact-cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .impact-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.impact-item {
  background-color: var(--bg-surface-subtle);
  border: 1px solid var(--border-color);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
}

.imp-metric {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--text-primary);
}

.imp-label {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.specs-card {
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  position: sticky;
  top: 100px;
}

.specs-card h3 {
  color: var(--text-inverse);
  font-size: var(--fs-xl);
}

.spec-group strong {
  font-size: var(--fs-xs);
  color: #A1A1AA;
  display: block;
}

.spec-group p {
  color: var(--text-inverse);
  font-size: var(--fs-sm);
  font-weight: 600;
}

.tech-stack-flex {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.tech-tag-badge {
  background-color: #27272A;
  color: var(--brand-yellow);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  font-size: var(--fs-xs);
}
</style>
