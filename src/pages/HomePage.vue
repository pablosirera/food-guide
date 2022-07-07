<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import usePlaces from '@/composables/usePlaces'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'

const { listPlaces, listPlacesByCategory } = usePlaces()
const { t } = useI18n()

const places = ref([])

const loadData = async () => {
  try {
    places.value = await listPlaces()
  } catch (error) {
    console.error(error)
  }
}

const selectCategory = async category => {
  if (category === 'all') {
    places.value = await listPlaces()
  } else {
    places.value = await listPlacesByCategory(category)
  }
}

loadData()
</script>

<template>
  <BaseLayout class="pb-16">
    <BaseSearchInput class="mb-4" />
    <section>
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-lg">Listas</h2>
        <router-link to="/categories" class="link">Ver más</router-link>
      </div>
      <CategoriesList @select-category="selectCategory" />
    </section>
    <section class="mb-4 mt-4 grid grid-cols-2 gap-4 justify-items-center">
      <TransitionGroup>
        <BaseCard
          v-for="place in places"
          :key="place.id"
          :title="place.name"
          image-url="https://api.lorem.space/image/burger?w=400&h=225"
        >
          <template #body>
            <div v-if="place.visited" class="badge badge-secondary">
              {{ t('places.visited') }}
            </div>
          </template>
        </BaseCard>
      </TransitionGroup>
    </section>
  </BaseLayout>
</template>
