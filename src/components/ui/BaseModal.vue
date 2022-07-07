<script setup>
defineProps({
  showClose: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['close'])
</script>

<template>
  <div class="modal visible opacity-100 pointer-events-auto">
    <button
      v-if="showClose"
      class="btn btn-sm btn-circle absolute right-2 top-12 z-10"
      @click="emit('close')"
    >
      ✕
    </button>
    <div class="modal-box">
      <slot />
      <div class="modal-action">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .modal {
    align-items: flex-start;
  }
}
</style>
