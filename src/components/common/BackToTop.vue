<template>
  <Transition name="fade">
    <button
      v-if="visible"
      type="button"
      class="fixed bottom-24 right-8 z-[800] p-3 rounded-full bg-brand-yellow hover:bg-brand-hover text-darkText shadow-xl border border-brand-border transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-hover flex items-center justify-center"
      aria-label="Scroll back to top"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 350;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
