<script setup>
import ListPlaces from '@/components/home/ListPlaces.vue'
import useAuthUser from '@/composables/useAuthUser'
const { user } = useAuthUser()

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
  <p>Hola: {{ user.user_metadata.name }}</p>
  <section class="flex justify-center">
    <ListPlaces :places="places" />
  </section>
</template>
