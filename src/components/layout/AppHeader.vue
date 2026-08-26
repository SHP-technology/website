<template>
  <header :class="['sticky top-0 left-0 w-full h-[80px] z-[900] transition-all duration-300 backdrop-blur-md', isScrolled ? 'bg-white/95 dark:bg-zinc-950/95 border-b border-gray-200 dark:border-zinc-800 shadow-sm' : 'bg-surface-main/85 dark:bg-zinc-950/85 border-b border-transparent']">
    <div class="container h-full flex items-center justify-between">
      <!-- Logo Component -->
      <router-link to="/" class="flex items-center" aria-label="SHP Technology Home">
        <AppLogo variant="header" height="h-9" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
        <router-link to="/" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">Home</router-link>
        <router-link to="/about" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">About</router-link>
        <router-link to="/services" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">Services</router-link>
        <router-link to="/portfolio" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">Work</router-link>
        <router-link to="/demo" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">Demo</router-link>
        <router-link to="/contact" class="nav-link text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-darkText dark:hover:text-white transition-colors py-2 relative">Contact</router-link>
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
          class="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 text-darkText dark:text-white flex items-center justify-center"
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
      <div v-if="mobileMenuOpen" class="fixed inset-x-0 top-[80px] h-[calc(100vh-80px)] bg-darkText/40 backdrop-blur-sm z-[899] lg:hidden" @click.self="mobileMenuOpen = false">
        <div id="mobile-navigation" class="bg-white dark:bg-zinc-900 p-6 border-b border-gray-200 dark:border-zinc-800 flex flex-col gap-6 shadow-xl">
          <nav class="flex flex-col gap-4" aria-label="Mobile navigation">
            <router-link to="/" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">Home</router-link>
            <router-link to="/about" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">About</router-link>
            <router-link to="/services" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">Services</router-link>
            <router-link to="/portfolio" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">Work</router-link>
            <router-link to="/demo" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">Product Demo</router-link>
            <router-link to="/contact" class="text-lg font-semibold text-darkText dark:text-white py-2 border-b border-gray-100 dark:border-zinc-800" @click="mobileMenuOpen = false">Contact</router-link>
          </nav>
          <div>
            <BaseButton to="/contact" variant="primary" full-width @click="mobileMenuOpen = false">
              Let's Talk
            </BaseButton>
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
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--brand-yellow);
  border-radius: 9999px;
}
</style>
