<template>
  <SectionContainer bg-alt>
    <div class="trust-content">
      <p class="trust-heading">Trusted by companies worldwide to build their software</p>
      <div class="client-logos">
        <div v-for="client in clientDomains" :key="client" class="logo-item">
          <span class="logo-icon-svg">❖</span>
          <span class="logo-name">{{ client }}</span>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';

const clientDomains = [
  'PayFlow Global',
  'Apex Health Systems',
  'TransWorld Logistics',
  'Luminary Retail',
  'AeroSpace Systems',
  'DataPulse Analytics'
];
</script>

<style scoped>
.trust-content {
  text-align: center;
}

.trust-heading {
  font-size: var(--fs-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: var(--space-8);
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .client-logos {
    gap: var(--space-12);
  }
}

.logo-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  font-weight: 700;
  font-size: var(--fs-lg);
  opacity: 0.8;
  transition: opacity var(--transition-fast);
}

.logo-item:hover {
  opacity: 1;
  color: var(--text-primary);
}

.logo-icon-svg {
  color: var(--brand-yellow-hover);
}
</style>
