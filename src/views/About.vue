<template>
  <div class="page-about">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          About SHP Technology
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          We Build Solid Software for Businesses
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          We are a friendly team of developers and software builders who love making tools that work well and help your business grow.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <h3>Our Goal</h3>
          <p>
            Many business software programs are slow, complicated, or break easily. Our goal is to build simple, fast, and reliable software that works perfectly every time.
          </p>
          <h3>Our Way of Working</h3>
          <p>
            We focus on what works, not on fancy trends. Everything we build is tested carefully, runs fast without stopping, and comes with easy instructions.
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
      tag="Our Team"
      title="Founded & Led by Experienced Developers"
      subtitle="Our founders bring years of experience building websites, databases, and business tools."
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
  title: 'About Our Company & Leadership',
  description: 'Learn about SHP Technology, our team of developers, our mission, and our software engineering philosophy.'
});

const team = [
  {
    name: 'Harsh Patel',
    initials: 'HP',
    role: 'Founder',
    bio: 'Founder of the company, focused on business strategy, technology solutions, automation, and overall company growth.'
  },
  {
    name: 'Sandesh Patel',
    initials: 'SP',
    role: 'Co-Founder & Head of Full-Stack Development',
    bio: 'Co-Founder and Head of Full-Stack Development, specializing in building scalable, modern web applications and robust full-stack solutions.'
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
  background-color: var(--bg-surface-subtle);
  color: var(--text-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  border: 1px solid var(--border-color);
}

.card-tag {
  color: var(--brand-yellow-hover);
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
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--space-3);
}

.m-val {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--text-primary);
}

.m-lbl {
  font-size: var(--fs-xs);
  color: var(--text-secondary);
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
