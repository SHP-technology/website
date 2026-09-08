<template>
  <div class="page-contact">
    <SectionContainer>
      <div class="max-w-4xl mx-auto text-center mb-10 animate-fade-in-up">
        <span class="inline-flex items-center gap-2 bg-brand-light dark:bg-slate-800 border border-brand-border dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primaryText mb-4">
          Contact Engineering
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
          Let’s Discuss Your Enterprise Engineering Goals
        </h1>
        <p class="text-lg text-secondaryText leading-relaxed">
          Whether you need cloud infrastructure modernization, custom enterprise software development, or an AI RAG pipeline, our senior engineering directors are ready to assist.
        </p>
      </div>

      <div class="contact-layout grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-16">
        <!-- Contact Information & Office Details -->
        <div class="info-sidebar animate-fade-in-up">
          <div class="info-card bg-surface-card text-primaryText p-8 rounded-2xl flex flex-col gap-6 h-full shadow-lg border border-surface-subtle dark:border-slate-800">
            <h2 class="text-primaryText text-2xl font-bold">Direct Contact Channels</h2>
            <p class="text-secondaryText text-base">Our team responds to all business inquiries within {{ siteConfig.contact.responseSLA }}.</p>

            <ul class="contact-details-list flex flex-col gap-6">
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📧</div>
                <div class="flex-1 min-w-0">
                  <strong class="text-xs text-mutedText uppercase tracking-wider block">Email Inquiry</strong>
                  <div class="flex flex-wrap items-center gap-2 mt-1">
                    <a :href="`mailto:${siteConfig.contact.email}`" class="text-sm font-semibold text-brand-hover dark:text-brand-yellow hover:underline break-all">{{ siteConfig.contact.email }}</a>
                    <button
                      type="button"
                      class="text-xs text-secondaryText hover:text-primaryText px-2 py-0.5 rounded bg-surface-card border border-surface-subtle dark:bg-slate-800 dark:border-slate-700 transition-colors"
                      @click="copyText(siteConfig.contact.email, 'Email')"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📞</div>
                <div class="flex-1 min-w-0">
                  <strong class="text-xs text-mutedText uppercase tracking-wider block">Phone Support</strong>
                  <div class="flex flex-wrap items-center gap-2 mt-1">
                    <a :href="`tel:${siteConfig.contact.phone}`" class="text-sm font-semibold text-brand-hover dark:text-brand-yellow hover:underline break-all">{{ siteConfig.contact.phone }}</a>
                    <button
                      type="button"
                      class="text-xs text-secondaryText hover:text-primaryText px-2 py-0.5 rounded bg-surface-card border border-surface-subtle dark:bg-slate-800 dark:border-slate-700 transition-colors"
                      @click="copyText(siteConfig.contact.phone, 'Phone number')"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 dark:bg-emerald-500/10 dark:border-emerald-500/20 flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg class="w-5 h-5 fill-emerald-500" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <strong class="text-xs text-mutedText uppercase tracking-wider block">WhatsApp — Fastest Reply</strong>
                  <a
                    :href="siteConfig.contact.whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                  >
                    <span>Chat Now on WhatsApp →</span>
                  </a>
                  <p class="text-[11px] text-mutedText mt-1">Pre-filled message — instant connect</p>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-surface-subtle border border-surface-subtle dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center text-xl shrink-0" aria-hidden="true">📍</div>
                <div>
                  <strong class="text-xs text-mutedText uppercase tracking-wider block">Headquarters & Office</strong>
                  <p class="text-sm font-semibold text-primaryText">{{ siteConfig.officeLocation.address }}</p>
                  <p class="text-xs text-mutedText">{{ siteConfig.officeLocation.city }}, {{ siteConfig.officeLocation.state }} {{ siteConfig.officeLocation.zip }} — {{ siteConfig.officeLocation.country }}</p>
                </div>
              </li>
            </ul>

            <div class="sla-box mt-auto bg-surface-card border border-surface-subtle dark:bg-slate-800/80 dark:border-slate-700 rounded-xl p-4">
              <span class="inline-block bg-brand-yellow text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full mb-2">Response SLA Guarantee</span>
              <p class="text-xs text-secondaryText">Inquiries received Monday through Friday are assigned a lead solutions architect within {{ siteConfig.contact.responseSLA }}.</p>
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
        <h2 class="text-2xl font-bold text-primaryText mb-6 text-center">Frequently Asked Engagement Questions</h2>
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
  title: 'Contact Software Engineers & Request Project Proposal',
  description: `Get in touch with ${siteConfig.name} software solutions directors. Submit your custom software project requirements, request a technical proposal, or schedule an engineering consultation.`,
  keywords: 'Contact Software Development Company, Request Software Proposal, Hire Developers Jabalpur India, Software Engineering Consultation, SHP Technology Contact',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact SHP Technology Engineering Team',
    description: 'Submit software project requirements or contact solutions directors.',
    mainEntity: {
      '@type': 'Organization',
      name: 'SHP Technology',
      url: 'https://www.shptechnology.online/',
      telephone: '+91-9301885654',
      email: 'founder.shp@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1st floor, SHP Technology, Near Underground Bridge, Madan Mahal Station',
        addressLocality: 'Jabalpur',
        addressRegion: 'MP',
        postalCode: '482001',
        addressCountry: 'India'
      }
    }
  }
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
