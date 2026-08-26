<template>
  <div class="page-services">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-10 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          Our Services Catalog
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Comprehensive Enterprise Software Engineering Solutions
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          From custom web application development to multi-cloud infrastructure and AI microservices, we build reliable software platforms.
        </p>
      </div>

      <!-- Search & Category Filter Bar -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
        <!-- Search Input -->
        <div class="relative w-full md:w-80">
          <label for="service-search-input" class="sr-only">Search services or tech</label>
          <input
            id="service-search-input"
            type="text"
            v-model="searchQuery"
            placeholder="Search services or tech..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-darkText dark:text-white text-sm focus:outline-none focus:border-brand-hover shadow-sm"
          />
          <svg class="absolute left-3.5 top-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter services by category">
          <button
            v-for="cat in categories"
            :key="cat"
            :aria-pressed="activeCategory === cat"
            :class="['px-4 py-2 rounded-full text-xs font-semibold border transition-all', activeCategory === cat ? 'bg-brand-yellow border-brand-yellow text-darkText shadow-sm' : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 hover:border-brand-yellow']"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="services-list flex flex-col gap-8">
        <BaseCard
          v-for="service in filteredServices"
          :key="service.id"
          class="service-detail-card"
        >
          <div class="card-main">
            <div class="service-top">
              <BaseBadge variant="yellow">{{ service.category }}</BaseBadge>
              <h2 class="service-name">{{ service.title }}</h2>
            </div>
            <p class="service-desc">{{ service.fullDescription }}</p>

            <div class="grid-details">
              <!-- Benefits -->
              <div class="detail-box">
                <h3 class="box-head">Key Benefits</h3>
                <ul class="check-list">
                  <li v-for="b in service.benefits" :key="b">
                    <span class="check" aria-hidden="true">✓</span>
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>

              <!-- Deliverables -->
              <div class="detail-box">
                <h3 class="box-head">Core Deliverables</h3>
                <ul class="check-list">
                  <li v-for="d in service.deliverables" :key="d">
                    <span class="check" aria-hidden="true">❖</span>
                    <span>{{ d }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card-action">
            <BaseButton :to="`/services/${service.slug}`" variant="primary" size="md">
              View Service Details
            </BaseButton>
          </div>
        </BaseCard>
        <div v-if="filteredServices.length === 0" role="status" class="rounded-2xl border border-dashed border-gray-300 dark:border-zinc-700 p-8 text-center text-secondaryText">
          <h2 class="text-xl font-bold text-primaryText mb-2">No matching services</h2>
          <p>Try a different keyword or choose another category.</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Service Estimator Component -->
    <ServiceEstimator />

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import ServiceEstimator from '@/components/sections/ServiceEstimator.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { servicesData } from '@/data/services';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Engineering Services & Technology Solutions',
  description: 'Explore SHP Technology enterprise software development, cloud infrastructure, AI RAG vector engines, and security audit offerings.'
});

const searchQuery = ref('');
const activeCategory = ref('All');
const categories = ['All', 'Engineering', 'Cloud & Infrastructure', 'AI & Data', 'Architecture'];

const filteredServices = computed(() => {
  return servicesData.filter((s) => {
    const matchesCat = activeCategory.value === 'All' || s.category === activeCategory.value;
    const query = searchQuery.value.toLowerCase().trim();
    const matchesQuery = !query || s.title.toLowerCase().includes(query) || s.shortDescription.toLowerCase().includes(query) || s.technologies.some((t) => t.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });
});
</script>

<style scoped>
.service-detail-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
}

.service-top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}

.service-name {
  font-size: var(--fs-2xl);
  color: var(--text-primary);
}

.service-desc {
  font-size: var(--fs-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.grid-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

@media (min-width: 768px) {
  .grid-details {
    grid-template-columns: 1fr 1fr;
  }
}

.detail-box {
  background-color: var(--bg-surface-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  border: 1px solid var(--border-color);
}

.box-head {
  font-size: var(--fs-sm);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.check-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--fs-xs);
  color: var(--text-secondary);
}

.check {
  color: var(--brand-yellow-hover);
  font-weight: 800;
}

.card-action {
  display: flex;
  justify-content: flex-end;
}
</style>
