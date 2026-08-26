<template>
  <div class="page-contact">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-10 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-zinc-800 border border-brand-border dark:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-darkText dark:text-zinc-200 mb-4">
          Contact Engineering
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white tracking-tight mb-4 leading-tight">
          Let’s Discuss Your Enterprise Engineering Goals
        </h1>
        <p class="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
          Whether you need cloud infrastructure modernization, custom enterprise software development, or an AI RAG pipeline, our senior engineering directors are ready to assist.
        </p>
      </div>

      <div class="contact-layout grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-16">
        <!-- Contact Information & Office Details -->
        <div class="info-sidebar animate-fade-in-up">
          <div class="info-card bg-gradient-to-br from-white via-surface-card to-surface-subtle dark:from-zinc-900 dark:via-slate-900 dark:to-zinc-950 text-primary-text p-8 rounded-2xl flex flex-col gap-6 h-full shadow-xl border border-surface-subtle dark:border-zinc-800">
            <h2 class="text-primary-text text-2xl font-bold">Direct Contact Channels</h2>
            <p class="text-secondary-text text-base">Our team responds to all business inquiries within {{ siteConfig.contact.responseSLA }}.</p>

            <ul class="contact-details-list flex flex-col gap-6">
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📧</div>
                <div class="flex-1">
                  <strong class="text-xs text-muted-text uppercase tracking-wider block">Email Inquiry</strong>
                  <div class="flex items-center gap-2 mt-1">
                    <a :href="`mailto:${siteConfig.contact.email}`" class="text-sm font-semibold text-brand-hover dark:text-brand-yellow hover:underline">{{ siteConfig.contact.email }}</a>
                    <button
                      type="button"
                      class="text-xs text-secondary-text hover:text-primary-text px-2 py-0.5 rounded bg-surface-card border border-surface-subtle dark:bg-zinc-800 dark:border-zinc-700 transition-colors"
                      @click="copyText(siteConfig.contact.email, 'Email')"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📞</div>
                <div class="flex-1">
                  <strong class="text-xs text-muted-text uppercase tracking-wider block">Phone Support</strong>
                  <div class="flex items-center gap-2 mt-1">
                    <a :href="`tel:${siteConfig.contact.phone}`" class="text-sm font-semibold text-brand-hover dark:text-brand-yellow hover:underline">{{ siteConfig.contact.phone }}</a>
                    <button
                      type="button"
                      class="text-xs text-secondary-text hover:text-primary-text px-2 py-0.5 rounded bg-surface-card border border-surface-subtle dark:bg-zinc-800 dark:border-zinc-700 transition-colors"
                      @click="copyText(siteConfig.contact.phone, 'Phone number')"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📍</div>
                <div>
                  <strong class="text-xs text-muted-text uppercase tracking-wider block">Headquarters & Office</strong>
                  <p class="text-sm font-semibold text-primary-text">{{ siteConfig.officeLocation.address }}</p>
                  <p class="text-xs text-muted-text">{{ siteConfig.officeLocation.city }}, {{ siteConfig.officeLocation.state }} {{ siteConfig.officeLocation.zip }} — {{ siteConfig.officeLocation.country }}</p>
                </div>
              </li>
            </ul>

            <div class="sla-box mt-auto bg-surface-card border border-surface-subtle dark:bg-zinc-800/80 dark:border-zinc-700 rounded-xl p-4">
              <span class="inline-block bg-brand-yellow text-darkText text-xs font-bold px-2 py-0.5 rounded-full mb-2">Response SLA Guarantee</span>
              <p class="text-xs text-secondary-text">Inquiries received Monday through Friday are assigned a lead solutions architect within {{ siteConfig.contact.responseSLA }}.</p>
            </div>
          </div>
        </div>

        <!-- Validated Contact Form Component -->
        <div class="form-container">
          <ContactForm />
        </div>
      </div>

      <!-- Contact Pre-Contract FAQ Accordion -->
      <div class="max-w-4xl mx-auto pt-8">
        <h2 class="text-2xl font-bold text-darkText dark:text-white mb-6 text-center">Frequently Asked Engagement Questions</h2>
        <FaqAccordion :items="contactFaqs" />
      </div>
    </SectionContainer>

    <!-- Toast Notification for Copying -->
    <BaseToast
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      type="success"
      @close="toast.show = false"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import ContactForm from '@/components/forms/ContactForm.vue';
import FaqAccordion from '@/components/common/FaqAccordion.vue';
import BaseToast from '@/components/common/BaseToast.vue';
import { siteConfig } from '@/config/site.config';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta({
  title: 'Contact Engineering & Request Proposal',
  description: `Get in touch with ${siteConfig.name} solutions directors. Submit your project requirements, request technical consultation, or ask business inquiries.`
});

const toast = reactive({
  show: false,
  title: '',
  message: ''
});

const copyText = (text: string, label: string) => {
  navigator.clipboard.writeText(text);
  toast.title = 'Copied to Clipboard!';
  toast.message = `${label} copied: ${text}`;
  toast.show = true;
};

const contactFaqs = [
  {
    question: 'What information should I include in my initial project inquiry?',
    answer: 'Sharing your core technical goals, expected user throughput, current technology stack, and target project timeline helps us prepare a tailored architecture proposal during our initial call.'
  },
  {
    question: 'Can you sign a Non-Disclosure Agreement (NDA) before we share proprietary specs?',
    answer: 'Absolutely. We routinely sign standard or custom NDAs prior to reviewing confidential codebase repositories or architectural specifications.'
  },
  {
    question: 'What engagement models do you offer?',
    answer: 'We offer dedicated engineering pods (monthly retainer), fixed-scope deliverables, and Site Reliability Engineering (SRE) SLA support contracts.'
  }
];
</script>
