<template>
  <section class="cta-section py-16 lg:py-20 relative overflow-hidden">
    <!-- Ambient orb background — bleeds through glass -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="orb orb-yellow"></div>
      <div class="orb orb-sky"></div>
      <div class="orb orb-emerald"></div>
    </div>

    <div class="container relative z-10">
      <!-- Glass CTA Panel -->
      <div class="cta-glass-panel glass-cta glass-shimmer relative overflow-hidden">

        <!-- Inner top highlight bar -->
        <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/25 to-transparent pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center p-8 md:p-14">
          <!-- Left: Headline -->
          <div>
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
              Fast, Reliable & Cost-Effective
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight mt-4">
              Get Your Project Shipped<br class="hidden lg:block"/>
              <span class="text-gradient-gold">Faster & Under Budget</span>
            </h2>
            <p class="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              We deliver premium software solutions with an unwavering focus on speed, reliability, and cost-efficiency. Schedule a technical consultation to see how we can accelerate your business without breaking the bank.
            </p>

            <!-- Trust badges row -->
            <div class="flex flex-wrap items-center gap-3 mt-6">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">⚡ Lightning Fast Delivery</span>
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">💰 Budget-Friendly Pricing</span>
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">🛡️ 100% Reliable Services</span>
            </div>
          </div>

          <!-- Right: CTA Actions -->
          <div class="flex flex-col gap-3">
            <BaseButton to="/contact" variant="primary" size="lg" class="w-full justify-center shadow-yellow-glow">
              Schedule Consultation
              <template #iconRight>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </template>
            </BaseButton>

            <a
              :href="siteConfig.contact.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-emerald-glow hover:shadow-emerald-glow-lg transition-all duration-200 border border-emerald-400/30 backdrop-blur-sm"
            >
              <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Instant Chat on WhatsApp</span>
            </a>

            <!-- Metric counters row -->
            <div class="grid grid-cols-3 gap-2 pt-1">
              <div class="flex flex-col items-center p-2.5 rounded-xl backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 shadow-sm">
                <span class="text-sm font-extrabold text-slate-900 dark:text-white leading-none">150+</span>
                <span class="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-1">Clients</span>
              </div>
              <div class="flex flex-col items-center p-2.5 rounded-xl backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 shadow-sm">
                <span class="text-sm font-extrabold text-slate-900 dark:text-white leading-none">80+</span>
                <span class="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-1">Projects</span>
              </div>
              <div class="flex flex-col items-center p-2.5 rounded-xl backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/12 shadow-sm">
                <span class="text-sm font-extrabold text-slate-900 dark:text-white leading-none">4h</span>
                <span class="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-1">Response</span>
              </div>
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

<style scoped>
.cta-section {
  background: var(--bg-main);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.55;
}

.orb-yellow {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, transparent 70%);
  top: -120px;
  left: -80px;
}

.orb-sky {
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 70%);
  bottom: -100px;
  right: 10%;
}

.orb-emerald {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%);
  top: 20%;
  right: 5%;
}

.cta-glass-panel {
  padding: 0;
  backdrop-filter: var(--glass-blur-strong);
  -webkit-backdrop-filter: var(--glass-blur-strong);
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border-strong);
  box-shadow: var(--glass-shadow-glow);
  border-radius: 28px;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #EAB308 0%, #D97706 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.dark) .text-gradient-gold {
  background: linear-gradient(135deg, #FACC15 0%, #F59E0B 50%, #FCD34D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.shadow-emerald-glow {
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
}

.shadow-emerald-glow-lg {
  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.4);
}
</style>
