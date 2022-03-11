<script setup>
import ImageFullCard from '@/components/ui/ImageFullCard.vue'

defineProps({
  places: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="flex flex-wrap justify-between sm:justify-center">
    <ImageFullCard
      v-for="(place, index) in places"
      :key="index"
      :item="place"
    />
  </section>
</template>
