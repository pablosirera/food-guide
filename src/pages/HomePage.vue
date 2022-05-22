<script setup>
import ImageFullCardsList from '@/components/ui/ImageFullCardsList.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import usePlaces from '@/composables/usePlaces'
import { ref } from 'vue'

const { listPlaces } = usePlaces()
const places = ref(null)

const loadData = async () => {
  try {
    places.value = await listPlaces()
  } catch (error) {
    console.error(error)
  }
}

loadData()
// const places = [
//   {
//     image: 'https://api.lorem.space/image/burger?w=400&h=225',
//     name: 'Little thai',
//   },
//   {
//     image: 'https://api.lorem.space/image/drink?w=400&h=225',
//     name: 'Mcdonals',
//   },
//   {
//     image: 'https://api.lorem.space/image/pizza?w=400&h=225',
//     name: 'Burguer King',
//   },
// ]
</script>

<template>
  <BaseLayout>
    <section class="flex justify-center p-3">
      <ImageFullCardsList :items="places" />
    </section>
  </BaseLayout>
</template>
