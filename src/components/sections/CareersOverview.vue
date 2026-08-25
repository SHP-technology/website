<template>
  <SectionContainer
    tag="Careers & Culture"
    title="Build High-Impact Software With Us"
    subtitle="We are looking for passionate architects, full-stack developers, and DevOps engineers who value technical excellence, autonomy, and pragmatic engineering."
  >
    <div class="careers-overview-grid">
      <!-- Culture Value Highlights -->
      <div class="culture-box">
        <h3 class="box-title">Why Join SHP Technology?</h3>
        <div class="values-list">
          <div v-for="val in companyCultureValues" :key="val.title" class="val-item">
            <div class="val-icon">✓</div>
            <div>
              <h4 class="val-title">{{ val.title }}</h4>
              <p class="val-desc">{{ val.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Open Positions Card List -->
      <div class="jobs-box">
        <h3 class="box-title">Open Positions ({{ jobsData.length }})</h3>
        <div class="jobs-list">
          <div v-for="job in jobsData" :key="job.id" class="job-mini-card">
            <div>
              <div class="job-meta">
                <BaseBadge variant="yellow">{{ job.department }}</BaseBadge>
                <span class="job-type">{{ job.employmentType }}</span>
              </div>
              <h4 class="job-title">{{ job.title }}</h4>
              <p class="job-location">📍 {{ job.location }}</p>
            </div>
            <BaseButton :to="`/careers/${job.slug}`" variant="outline" size="sm">
              View Role
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { jobsData, companyCultureValues } from '@/data/jobs';
</script>

<style scoped>
.careers-overview-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .careers-overview-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.box-title {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-6);
}

.values-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.val-item {
  display: flex;
  gap: var(--space-3);
  background-color: var(--bg-surface-subtle);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.val-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--brand-yellow-light);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--fs-xs);
  flex-shrink: 0;
}

.val-title {
  font-size: var(--fs-base);
  font-weight: 700;
  margin-bottom: 2px;
}

.val-desc {
  font-size: var(--fs-xs);
  color: var(--text-secondary);
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.job-mini-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
}

@media (min-width: 480px) {
  .job-mini-card {
    flex-direction: row;
    align-items: center;
  }
}

.job-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-1);
}

.job-type {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.job-title {
  font-size: var(--fs-base);
  font-weight: 700;
  margin-bottom: 2px;
}

.job-location {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}
</style>
