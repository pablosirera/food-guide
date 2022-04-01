<script setup>
import ImageCardsList from '@/components/ui/ImageCardsList.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'

const places = [
  {
    img: 'https://api.lorem.space/image/burger?w=400&h=225',
    name: 'Little thai',
  },
  {
    img: 'https://api.lorem.space/image/drink?w=400&h=225',
    name: 'Mcdonals',
  },
  {
    img: 'https://api.lorem.space/image/pizza?w=400&h=225',
    name: 'Burguer King',
  },
]
</script>

<template>
  <BaseLayout>
    <section class="flex justify-center p-3">
      <ImageCardsList :items="places" />
    </section>
  </BaseLayout>
</template>
