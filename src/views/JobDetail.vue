<template>
  <div v-if="job" class="page-job-detail">
    <SectionContainer>
      <div class="job-header">
        <BaseButton to="/careers" variant="outline" size="sm" class="mb-4">
          ← Back to All Careers
        </BaseButton>

        <div class="badges flex gap-2 mb-2">
          <BaseBadge variant="yellow">{{ job.department }}</BaseBadge>
          <BaseBadge variant="neutral">{{ job.employmentType }}</BaseBadge>
        </div>

        <h1 class="job-title">{{ job.title }}</h1>
        <p class="job-meta">📍 {{ job.location }} • {{ job.experienceLevel }}</p>
      </div>

      <div class="job-content-grid">
        <div class="main-content">
          <section class="sec">
            <h3>Role Description</h3>
            <p>{{ job.fullDescription }}</p>
          </section>

          <section class="sec">
            <h3>Key Responsibilities</h3>
            <ul>
              <li v-for="r in job.responsibilities" :key="r">{{ r }}</li>
            </ul>
          </section>

          <section class="sec">
            <h3>Requirements & Qualifications</h3>
            <ul>
              <li v-for="req in job.requirements" :key="req">{{ req }}</li>
            </ul>
          </section>

          <section v-if="job.niceToHave && job.niceToHave.length" class="sec">
            <h3>Nice to Have / Bonus Skills</h3>
            <ul>
              <li v-for="nth in job.niceToHave" :key="nth">{{ nth }}</li>
            </ul>
          </section>

          <div class="apply-cta">
            <BaseButton variant="primary" size="lg" @click="applyModalOpen = true">
              Apply For This Position
            </BaseButton>
          </div>
        </div>

        <div class="sidebar">
          <div class="side-card">
            <h4>Quick Info</h4>
            <div class="info-item">
              <strong>Department</strong>
              <span>{{ job.department }}</span>
            </div>
            <div class="info-item">
              <strong>Location</strong>
              <span>{{ job.location }}</span>
            </div>
            <div class="info-item">
              <strong>Employment Type</strong>
              <span>{{ job.employmentType }}</span>
            </div>
            <div class="info-item">
              <strong>Experience Level</strong>
              <span>{{ job.experienceLevel }}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Application Form Modal -->
    <BaseModal
      :show="applyModalOpen"
      :title="`Apply: ${job.title}`"
      @close="applyModalOpen = false"
    >
      <JobApplyForm :job-title="job.title" @success="applyModalOpen = false" />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModal from '@/components/common/BaseModal.vue';
import JobApplyForm from '@/components/forms/JobApplyForm.vue';
import { jobsData } from '@/data/jobs';
import { useSeoMeta } from '@/composables/useSeoMeta';

const route = useRoute();
const applyModalOpen = ref(false);

const job = computed(() => {
  return jobsData.find((j) => j.slug === route.params.slug) || jobsData[0];
});

useSeoMeta(() => job.value
  ? {
      title: `${job.value.title} — Career Opening`,
      description: job.value.shortDescription,
      keywords: `${job.value.title}, ${job.value.department} jobs, ${job.value.location} software jobs, SHP Technology careers`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.value.title,
        description: job.value.fullDescription,
        datePosted: '2026-08-01',
        employmentType: job.value.employmentType === 'Full-time' ? 'FULL_TIME' : 'CONTRACTOR',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'SHP Technology',
          sameAs: 'https://www.shptechnology.online/',
          logo: 'https://www.shptechnology.online/assets/image.png'
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jabalpur',
            addressRegion: 'MP',
            addressCountry: 'India'
          }
        },
        applicantLocationRequirements: {
          '@type': 'Country',
          name: 'India'
        },
        jobLocationType: job.value.location.includes('Remote') ? 'TELECOMMUTE' : undefined
      }
    }
  : {
      title: 'Job Opening Not Found',
      description: 'The requested job opening could not be found.',
      noIndex: true
    });
</script>

<style scoped>
.job-title {
  font-size: var(--fs-4xl);
  margin-bottom: var(--space-2);
}

.job-meta {
  font-size: var(--fs-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.job-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .job-content-grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.sec {
  margin-bottom: var(--space-8);
}

.sec h3 {
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
}

.sec p, .sec ul {
  font-size: var(--fs-base);
  color: var(--text-secondary);
  line-height: 1.7;
}

.sec ul {
  padding-left: var(--space-6);
}

.sec li {
  margin-bottom: var(--space-2);
}

.apply-cta {
  margin-top: var(--space-8);
}

.side-card {
  background-color: var(--bg-surface-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.side-card h4 {
  font-size: var(--fs-lg);
  margin-bottom: var(--space-2);
}

.info-item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--space-2);
}

.info-item strong {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.info-item span {
  font-size: var(--fs-sm);
  font-weight: 600;
}
</style>
