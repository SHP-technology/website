<template>
  <div v-if="service" class="page-service-detail">
    <SectionContainer>
      <div class="breadcrumb">
        <router-link to="/services">← Back to All Services</router-link>
      </div>

      <div class="header-block">
        <BaseBadge variant="yellow">{{ service.category }}</BaseBadge>
        <h1 class="service-heading">{{ service.title }}</h1>
        <p class="service-lead">{{ service.fullDescription }}</p>
      </div>

      <div class="detail-grid">
        <!-- Main Column -->
        <div class="main-info">
          <!-- Problem & Solution Breakdown -->
          <div class="info-card">
            <h3>Problem We Solve</h3>
            <p class="problem-callout">{{ service.problemSolved }}</p>
          </div>

          <!-- Benefits -->
          <div class="info-card">
            <h3>Key Advantages & Value Delivered</h3>
            <ul class="benefits-list">
              <li v-for="b in service.benefits" :key="b">
                <span class="bullet">✦</span>
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>

          <!-- Deliverables -->
          <div class="info-card">
            <h3>Core Deliverables</h3>
            <div class="deliverables-grid">
              <div v-for="d in service.deliverables" :key="d" class="deliv-item">
                <span class="deliv-icon">📦</span>
                <span>{{ d }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Inquiry Card -->
        <div class="sidebar">
          <div class="sticky-inquiry">
            <h3>Schedule a Service Consultation</h3>
            <p>Speak with a senior solutions architect specialized in {{ service.title }}.</p>
            <div class="tech-stack-used">
              <strong>Technologies Used:</strong>
              <div class="tags-row">
                <span v-for="t in service.technologies" :key="t" class="t-badge">{{ t }}</span>
              </div>
            </div>
            <BaseButton to="/contact" variant="primary" full-width>
              Inquire About {{ service.title }}
            </BaseButton>
          </div>
        </div>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
  <div v-else class="container section-padding text-center">
    <h2>Service Not Found</h2>
    <BaseButton to="/services" variant="outline" class="mt-4">Back to Services</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { servicesData } from '@/data/services';
import { useSeoMeta } from '@/composables/useSeoMeta';

const route = useRoute();
const service = computed(() => servicesData.find((s) => s.slug === route.params.slug));

useSeoMeta(() => service.value
  ? {
      title: service.value.title,
      description: service.value.shortDescription,
      keywords: `${service.value.title}, software development services, ${service.value.technologies.join(', ')}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.value.title,
        description: service.value.shortDescription,
        provider: { '@type': 'Organization', name: 'SHP Technology' },
        areaServed: 'Worldwide'
      }
    }
  : {
      title: 'Service Not Found',
      description: 'The requested SHP Technology service page could not be found.',
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

.header-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--space-8);
}

.service-heading {
  font-size: var(--fs-4xl);
  color: var(--text-primary);
}

.service-lead {
  font-size: var(--fs-xl);
  color: var(--text-secondary);
  max-width: 800px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .detail-grid {
    grid-template-columns: 2fr 1fr;
  }
}

.main-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.info-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.info-card h3 {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-4);
}

.problem-callout {
  background-color: var(--brand-yellow-light);
  border-left: 4px solid var(--brand-yellow-hover);
  padding: var(--space-4);
  border-radius: var(--radius-sm);
  font-size: var(--fs-base);
  color: var(--text-primary);
  font-weight: 500;
}

.benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--fs-base);
  color: var(--text-secondary);
}

.bullet {
  color: var(--brand-yellow-hover);
}

.deliverables-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .deliverables-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.deliv-item {
  background-color: var(--bg-surface-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--fs-sm);
  font-weight: 600;
}

.sidebar {
  display: flex;
  flex-direction: column;
}

.sticky-inquiry {
  position: sticky;
  top: 100px;
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  box-shadow: var(--shadow-xl);
}

.sticky-inquiry h3 {
  color: var(--text-inverse);
  font-size: var(--fs-xl);
}

.sticky-inquiry p {
  color: var(--text-on-dark);
  font-size: var(--fs-sm);
}

.tech-stack-used {
  font-size: var(--fs-xs);
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.t-badge {
  background-color: var(--bg-zinc-800);
  color: var(--brand-yellow);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  font-size: var(--fs-xs);
}
</style>
