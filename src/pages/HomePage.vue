<script setup>
import { ref } from 'vue'
import usePlaces from '@/composables/usePlaces'
import CategoriesList from '@/components/categories/CategoriesList.vue'
import { useRouter } from 'vue-router'
import PlaceCard from '@/components/places/PlaceCard.vue'

const { listPlacesHome, listPlacesByCategory } = usePlaces()

const router = useRouter()

const places = ref([])

const loadData = async () => {
  try {
    places.value = await listPlacesHome()
  } catch (error) {
    console.error(error)
  }
}

const selectCategory = async category => {
  if (category === 'all') {
    places.value = await listPlacesHome()
  } else {
    places.value = await listPlacesByCategory(category)
  }
}

const goToPlaceDetail = placeId => {
  router.push(`/places/${placeId}`)
}

loadData()
</script>

<template>
  <BaseLayout>
    <template #header>
      <header class="p-4 pb-0">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-lg">Listas</h2>
          <router-link to="/categories" class="link">Ver más</router-link>
        </div>
        <CategoriesList @select-category="selectCategory" />
      </header>
    </template>
    <section class="mb-4 mt-4 flex flex-col gap-4">
      <h2 class="font-bold text-lg">Añadido recientemente</h2>
      <PlaceCard
        v-for="place in places"
        :key="place.id"
        :item="place"
        @click="goToPlaceDetail(place.id)"
      />
    </section>
  </BaseLayout>
</template>
