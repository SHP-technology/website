<template>
  <div class="page-home">
    <HeroSection />
    <TrustSection />
    <ServicesGrid />
    <MethodologySection />
    <TechStackSection />
    <PortfolioSection />
    <TestimonialsSection />

    <!-- FAQ Accordion Section -->
    <SectionContainer
      tag="Frequently Asked Questions"
      title="Common Engineering & Engagement Questions"
      subtitle="Here are answers to common questions about working with SHP Technology."
    >
      <div class="max-w-4xl mx-auto">
        <FaqAccordion :items="homeFaqs" />
      </div>
    </SectionContainer>

    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import TrustSection from '@/components/sections/TrustSection.vue';
import ServicesGrid from '@/components/sections/ServicesGrid.vue';
import MethodologySection from '@/components/sections/MethodologySection.vue';
import TechStackSection from '@/components/sections/TechStackSection.vue';
import PortfolioSection from '@/components/sections/PortfolioSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import FaqAccordion from '@/components/common/FaqAccordion.vue';
import CtaBanner from '@/components/sections/CtaBanner.vue';
import { useSeoMeta } from '@/composables/useSeoMeta';

const homeFaqs = [
  {
    question: 'How quickly can your engineering team onboard and begin development?',
    answer: 'Our senior engineering pods can integrate into your project repository within 3 to 5 business days following initial technical alignment and NDA execution.'
  },
  {
    question: 'Who owns the intellectual property (IP) of code written by SHP Technology?',
    answer: 'You retain 100% full ownership of all code, architecture blueprints, database schemas, and documentation produced during our contract.'
  },
  {
    question: 'What software development methodology do you follow?',
    answer: 'We utilize a transparent 6-stage engineering process (Understand -> Plan -> Build -> Test -> Deploy -> Improve) with bi-weekly sprint demos and continuous integration.'
  },
  {
    question: 'Do you provide post-deployment maintenance and SLA support?',
    answer: 'Yes. We offer 24/7 Site Reliability Engineering (SRE) monitoring, zero-downtime deployment maintenance, and guaranteed response SLAs.'
  }
];

useSeoMeta({
  title: 'Enterprise Software & Cloud Engineering Firm',
  description: 'SHP Technology builds custom software, cloud infrastructure, and practical AI integrations for growing businesses.',
  keywords: 'custom software development, web application development, cloud infrastructure, AI integration, Jabalpur software company',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  }
});
</script>
