<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="show" :class="['toast-notification', `type-${type}`]" role="alert">
        <div class="toast-icon">
          <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        </div>
        <div class="toast-content">
          <h4 class="toast-title">{{ title }}</h4>
          <p class="toast-message">{{ message }}</p>
        </div>
        <button class="toast-close" @click="$emit('close')">×</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean;
    title: string;
    message: string;
    type?: 'success' | 'error';
  }>(),
  {
    type: 'success'
  }
);

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
.toast-notification {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  background-color: var(--bg-dark-surface);
  color: var(--text-inverse);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  z-index: 1100;
  max-width: 420px;
  border-left: 4px solid var(--brand-yellow);
}

.toast-notification.type-error {
  border-left-color: var(--color-error);
}

.toast-icon {
  margin-top: 2px;
  color: var(--brand-yellow);
}

.toast-notification.type-error .toast-icon {
  color: var(--color-error);
}

.toast-title {
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--text-inverse);
}

.toast-message {
  font-size: var(--fs-xs);
  color: #A1A1AA;
  margin-top: 2px;
}

.toast-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  margin-left: auto;
}

@media (max-width: 639px) {
  .toast-notification {
    right: var(--space-4);
    bottom: var(--space-4);
    left: var(--space-4);
    max-width: none;
    padding: var(--space-4);
  }
}

/* Vue Toast Transition */
.toast-enter-active,
.toast-leave-active {
  transition: all var(--transition-normal);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
