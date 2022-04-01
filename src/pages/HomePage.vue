<script setup>
import ListPlaces from '@/components/home/ListPlaces.vue'
import useAuthUser from '@/composables/useAuthUser'
import BaseTabs from '../components/ui/BaseTabs.vue'
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

const tabs = [
  {
    name: 'HomeIcon',
    route: '/',
    slot: 'tab-1',
  },
  {
    name: 'PlusIcon',
    route: '/lists',
    slot: 'tab-2',
  },
  {
    name: 'UserIcon',
    route: '/profile',
    slot: 'tab-3',
  },
]
</script>

<template>
  <p>Hola: {{ user.name }}</p>
  <section class="flex justify-center">
    <ListPlaces :places="places" />
  </section>
  <BaseTabs :tabs="tabs" :use-icons="true" />
</template>
