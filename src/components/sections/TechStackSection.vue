<template>
  <SectionContainer
    tag="Our Tech Stack"
    title="The Technology Tools We Use"
    subtitle="We choose popular, fast, and safe programming tools to build software that is easy to update and runs without breaking."
  >
    <div class="tech-category-grid">
      <div
        v-for="cat in techStackData"
        :key="cat.category"
        class="category-card"
      >
        <h3 class="cat-title">{{ cat.category }}</h3>
        <div class="items-grid">
          <div
            v-for="item in cat.items"
            :key="item.name"
            class="tech-item"
          >
            <div class="item-header">
              <span class="tech-icon-symbol">⚡</span>
              <span class="tech-name">{{ item.name }}</span>
            </div>
            <p class="tech-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { techStackData } from '@/data/techStack';
</script>

<style scoped>
.tech-category-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .tech-category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.category-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.cat-title {
  font-size: var(--fs-xl);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-3);
  border-bottom: 2px solid var(--brand-yellow);
  display: inline-block;
}

.items-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 480px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tech-item {
  background-color: var(--bg-surface-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
}

.item-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: 2px;
}

.tech-icon-symbol {
  color: var(--brand-yellow-hover);
  font-size: var(--fs-xs);
}

.tech-name {
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--text-primary);
}

.tech-desc {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}
</style>
