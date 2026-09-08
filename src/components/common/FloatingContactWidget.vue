<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
    <!-- Quick Contact Popup Card -->
    <Transition name="slide-fade">
      <div
        v-if="isOpen"
        class="pointer-events-auto relative w-80 max-w-[calc(100vw-3rem)] shadow-2xl p-5 rounded-2xl backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-white/12 text-slate-900 dark:text-white transition-all duration-200 overflow-hidden"
      >
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-white/10">
          <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="font-bold text-sm text-slate-900 dark:text-white">Instant Response Available</span>
          </div>
          <button
            @click="isOpen = false"
            class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-lg transition-colors"
            aria-label="Close contact popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <p class="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          Skip long forms! Connect directly with our lead engineering team in under 5 minutes:
        </p>

        <div class="flex flex-col gap-2.5">
          <!-- WhatsApp CTA Button -->
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackClick('WhatsApp Floating Widget')"
            class="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm hover:bg-emerald-500/20 transition-all duration-200"
          >
            <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <div class="flex flex-col text-left">
              <span>Chat on WhatsApp</span>
              <span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-300">Instant direct response</span>
            </div>
            <svg class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>

          <!-- Email Direct Button -->
          <a
            :href="`mailto:${email}`"
            @click="trackClick('Email Direct Floating Widget')"
            class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <svg class="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Email Founder Directly</span>
          </a>

          <!-- Phone Call Button -->
          <a
            :href="`tel:${phone}`"
            @click="trackClick('Phone Call Floating Widget')"
            class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <svg class="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Call {{ phone }}</span>
          </a>

          <!-- Book Quote Link -->
          <router-link
            to="/contact"
            @click="isOpen = false; trackClick('Contact Form Floating Link')"
            class="flex items-center justify-center gap-2 pt-2 text-center text-xs font-semibold text-brand-sky dark:text-sky-400 hover:underline"
          >
            Or fill out detailed project scope form →
          </router-link>
        </div>
      </div>
    </Transition>

    <!-- Floating Toggle Button & Tooltip Badge -->
    <div class="pointer-events-auto flex items-center gap-2.5">
      <!-- Floating Teaser Tag (Shown when popup is closed) -->
      <button
        v-if="!isOpen"
        @click="isOpen = true"
        class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/12 text-slate-900 dark:text-white text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group hover:scale-105"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Have a Project? <strong>Chat Now</strong></span>
      </button>

       <!-- Main Floating Circle Trigger -->
       <button
         @click="isOpen = !isOpen"
         class="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none border border-emerald-400/30"
         aria-label="Toggle instant contact options"
       >
        <!-- Pulse Glow Outer Ring -->
        <span class="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none opacity-75"></span>

        <!-- WhatsApp Icon inside floating button -->
        <svg v-if="!isOpen" class="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        <!-- Close Icon when open -->
        <svg v-else class="w-6 h-6 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { siteConfig } from '@/config/site.config';
import { useAnalytics } from '@/composables/useAnalytics';

const isOpen = ref(false);
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;
const whatsappUrl = siteConfig.contact.whatsapp;
const { trackEvent } = useAnalytics();

const trackClick = (actionName: string) => {
  trackEvent('Instant Contact Click', { channel: actionName });
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.95);
}
</style>
