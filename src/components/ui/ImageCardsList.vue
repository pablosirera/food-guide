<script setup>
import ImageFullCard from '@/components/ui/ImageFullCard.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="flex flex-wrap justify-between sm:justify-center">
    <ImageFullCard v-for="(item, index) in items" :key="index" :item="item" />
  </section>
</template>
