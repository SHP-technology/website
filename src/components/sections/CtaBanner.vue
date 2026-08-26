<template>
  <section class="py-16 lg:py-20 bg-surface-main">
    <div class="container">
      <div class="relative overflow-hidden rounded-3xl bg-surface-card p-8 md:p-14 text-primaryText dark:text-white shadow-lg border border-surface-subtle dark:border-zinc-800">

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light border border-brand-border text-primaryText text-xs font-bold uppercase tracking-wider mb-4">
              Ready to Accelerate Growth?
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primaryText dark:text-white tracking-tight mb-4 leading-tight">
              Let's Build Your Next High-Impact Software System
            </h2>
            <p class="text-secondaryText dark:text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
              Schedule a technical consultation with our senior solutions directors to discuss your enterprise requirements, cloud architecture, or AI roadmap.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
            <BaseButton to="/contact" variant="primary" size="lg" class="shadow-yellow-glow">
              Schedule Technical Consultation
              <template #iconRight>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </template>
            </BaseButton>

            <div class="flex items-center justify-center gap-3 text-xs text-mutedText mt-2">
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
</script>
