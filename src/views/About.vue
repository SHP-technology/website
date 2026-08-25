<template>
  <div class="page-about">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          About SHP Technology
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Senior Engineering Craftsmanship for Modern Enterprise Systems
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          We are a collective of senior architects and software engineers dedicated to building resilient digital foundation platforms.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <h3>Our Mission</h3>
          <p>
            Modern enterprise software is often burdened by legacy technical debt, brittle microservices integrations, and operational bottlenecks. At {{ companyData.name }}, our mission is to deliver clean, predictable, and maintainable software systems that empower engineering teams to release with confidence.
          </p>
          <h3>Engineering Philosophy</h3>
          <p>
            We favor pragmatic architecture over hype. Every system we build emphasizes type-safety, high-availability SLAs, automated test coverage, and transparent code documentation.
          </p>
        </div>
        <div class="about-card">
          <div class="card-inner">
            <span class="card-tag">Company Performance Metrics</span>
            <div class="metrics-stack">
              <div v-for="m in companyData.metrics" :key="m.label" class="metric-row">
                <span class="m-val">{{ m.value }}</span>
                <span class="m-lbl">{{ m.description }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Company Timeline Section -->
    <CompanyTimeline />

    <MethodologySection />

    <!-- Team & Leadership Section -->
    <SectionContainer
      tag="Leadership"
      title="Founded & Led By Veteran Software Architects"
      subtitle="Our leadership team brings decades of experience scaling global cloud systems and developer platforms."
    >
      <div class="team-grid">
        <BaseCard v-for="member in team" :key="member.name" class="team-card">
          <div class="avatar-circle" aria-hidden="true">{{ member.initials }}</div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-bio">{{ member.bio }}</p>
        </BaseCard>
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import MethodologySection from '@/components/sections/MethodologySection.vue';
import CompanyTimeline from '@/components/sections/CompanyTimeline.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import { companyData } from '@/data/company';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'About Our Company & Senior Leadership',
  description: 'Learn about SHP Technology mission, senior software architects, engineering philosophy, and 99.999% SLA track record.'
});

const team = [
  {
    name: 'Sandesh Patel',
    initials: 'SP',
    role: 'Founder & Lead Full-Stack Developer',
    bio: 'Associate Developer at REAK INFOTECH and Cybersecurity Enthusiast. Expert in building modern web applications and type-safe systems.'
  },
  {
    name: 'Dr. Aris Thorne',
    initials: 'AT',
    role: 'Principal Cloud Systems Advisor',
    bio: 'Distributed systems researcher. Expert in High-Throughput Kafka streaming, Go microservices, and Kubernetes architecture.'
  },
  {
    name: 'Sarah Lin',
    initials: 'SL',
    role: 'Frontend Architect & UI Designer',
    bio: 'Specialist in Vue 3 component architecture, accessible design systems, and enterprise UX orchestration.'
  }
];
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  align-items: center;
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.about-text h3 {
  font-size: var(--fs-2xl);
  color: var(--text-primary);
}

.about-card {
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color-dark);
}

.card-tag {
  color: var(--brand-yellow);
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: var(--space-6);
}

.metrics-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.metric-row {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #27272A;
  padding-bottom: var(--space-3);
}

.m-val {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--text-inverse);
}

.m-lbl {
  font-size: var(--fs-xs);
  color: #A1A1AA;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.team-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--brand-yellow-light);
  border: 2px solid var(--brand-yellow);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--fs-lg);
  margin-bottom: var(--space-4);
}

.member-name {
  font-size: var(--fs-lg);
  margin-bottom: 2px;
}

.member-role {
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--brand-yellow-hover);
  margin-bottom: var(--space-3);
}

.member-bio {
  font-size: var(--fs-xs);
  color: var(--text-secondary);
}
</style>
