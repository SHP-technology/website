<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="show" class="modal-backdrop" @click.self="closeOnBackdrop && $emit('close')">
        <div class="modal-container" role="dialog" aria-modal="true">
          <div class="modal-header">
            <h3 class="modal-title">{{ title }}</h3>
            <button type="button" class="close-btn" aria-label="Close modal" @click="$emit('close')">
              ✕
            </button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean;
    title: string;
    closeOnBackdrop?: boolean;
  }>(),
  {
    closeOnBackdrop: true
  }
);

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: var(--backdrop-overlay);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.modal-container {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-color);
}

.modal-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: var(--fs-xl);
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  font-size: var(--fs-lg);
  color: var(--text-muted);
  cursor: pointer;
  padding: var(--space-1);
}

.close-btn:hover {
  color: var(--text-primary);
}

.modal-body {
  padding: var(--space-6);
}

.modal-footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity var(--transition-normal);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
