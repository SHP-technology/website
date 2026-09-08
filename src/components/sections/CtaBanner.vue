<template>
  <section class="py-16 lg:py-20 bg-surface-main">
    <div class="container">
      <div class="relative overflow-hidden rounded-3xl bg-surface-card p-8 md:p-14 text-primaryText shadow-lg border border-surface-subtle dark:border-slate-800">

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light border border-brand-border text-primaryText text-xs font-bold uppercase tracking-wider mb-4">
              Ready to Accelerate Growth?
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
              Let's Build Your Next High-Impact Software System
            </h2>
            <p class="text-secondaryText text-base md:text-lg max-w-xl leading-relaxed">
              Schedule a technical consultation with our senior solutions directors to discuss your enterprise requirements, cloud architecture, or AI roadmap.
            </p>
          </div>

          <div class="flex flex-col gap-3 justify-end">
            <BaseButton to="/contact" variant="primary" size="lg" class="shadow-yellow-glow">
              Schedule Technical Consultation
              <template #iconRight>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </template>
            </BaseButton>

            <a
              :href="siteConfig.contact.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 text-center"
            >
              <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Instant Chat on WhatsApp</span>
            </a>

            <div class="flex items-center justify-center gap-3 text-xs text-mutedText mt-1">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Average initial response time: <strong>&lt;4 business hours</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { siteConfig } from '@/config/site.config';
</script>
