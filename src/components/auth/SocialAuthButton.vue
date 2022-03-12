<script setup>
defineProps({
  type: {
    type: String,
    default: 'google',
    validator: value => ['google'].includes(value),
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    class="rounded-full border py-2 px-6 flex items-center justify-center my-2"
    :class="type"
  >
    {{ text }}
  </button>
</template>
