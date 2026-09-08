<template>
  <header :class="['sticky top-0 left-0 w-full h-[80px] z-[900] transition-all duration-300 backdrop-blur-xl', isScrolled ? 'bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-950/5' : 'bg-white/70 dark:bg-slate-900/75 border-b border-slate-200/40 dark:border-slate-800/40']">
    <!-- Top Brand Gradient Line for Distinct Header Visual Identity -->
    <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-yellow via-sky-400 to-amber-500"></div>

    <div class="container h-full flex items-center justify-between">
      <!-- Logo Component -->
      <router-link to="/" class="flex items-center" aria-label="SHP Technology Home">
        <AppLogo variant="header" height="h-9" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
        <router-link to="/" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">Home</router-link>
        <router-link to="/about" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">About</router-link>
        <router-link to="/services" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">Services</router-link>
        <router-link to="/portfolio" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">Work</router-link>
        <router-link to="/demo" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">Demo</router-link>
        <router-link to="/contact" class="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors py-2 relative">Contact</router-link>
      </nav>

      <!-- Desktop Right Controls -->
      <div class="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        <BaseButton to="/contact" variant="primary" size="sm">
          Let's Talk
          <template #iconRight>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </template>
        </BaseButton>
      </div>

      <!-- Mobile Right Controls -->
      <div class="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white flex items-center justify-center"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition name="drawer">
      <div v-if="mobileMenuOpen" class="fixed inset-x-0 top-[80px] h-[calc(100vh-80px)] bg-slate-950/60 backdrop-blur-sm z-[899] lg:hidden" @click.self="mobileMenuOpen = false">
        <div id="mobile-navigation" class="bg-white dark:bg-slate-900 p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col gap-6 shadow-2xl">
          <nav class="flex flex-col gap-4" aria-label="Mobile navigation">
            <router-link to="/" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">Home</router-link>
            <router-link to="/about" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">About</router-link>
            <router-link to="/services" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">Services</router-link>
            <router-link to="/portfolio" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">Work</router-link>
            <router-link to="/demo" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">Product Demo</router-link>
            <router-link to="/contact" class="text-lg font-semibold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800" @click="mobileMenuOpen = false">Contact</router-link>
          </nav>
          <div class="flex flex-col gap-3">
            <BaseButton to="/contact" variant="primary" full-width @click="mobileMenuOpen = false">
              Let's Talk
            </BaseButton>
            <a
              href="https://wa.me/919301885654?text=Hi%20SHP%20Technology,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors"
              @click="mobileMenuOpen = false"
            >
              <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp — Instant Chat</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import ThemeToggle from '@/components/common/ThemeToggle.vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') mobileMenuOpen.value = false;
};

watch(mobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', closeOnEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.nav-link.router-link-active {
  font-weight: 600;
  color: var(--text-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2.5px;
  background: linear-gradient(90deg, var(--brand-yellow), var(--brand-sky));
  border-radius: 9999px;
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.4);
}
</style>
