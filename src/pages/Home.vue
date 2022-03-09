<script setup>
import ListPlaces from '@/components/home/ListPlaces.vue'

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
  <section class="flex justify-center">
    <ListPlaces :places="places" />
  </section>
</template>
