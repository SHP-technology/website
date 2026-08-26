<template>
  <div class="app-wrapper bg-surface-main min-h-screen text-darkText flex flex-col transition-colors duration-200">
    <ScrollProgress />
    <AppHeader />
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <main id="main-content" class="app-main flex-1" tabindex="-1">
      <router-view v-slot="{ Component }">
        <transition name="fade-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import ScrollProgress from '@/components/common/ScrollProgress.vue';
import BackToTop from '@/components/common/BackToTop.vue';
</script>

<style>
/* Page Transition Effects */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity var(--transition-fast);
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
