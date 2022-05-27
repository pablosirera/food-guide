<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import usePlaces from '@/composables/usePlaces'
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'

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
</script>

<template>
  <BaseLayout>
    <section class="grid grid-cols-2 justify-items-center gap-5 p-3">
      <BaseCard
        v-for="place in places"
        :key="place.id"
        :title="place.name"
        image-url="https://api.lorem.space/image/shoes?w=400&h=225"
      />
    </section>
  </BaseLayout>
</template>
