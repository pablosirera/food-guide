<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import usePlaces from '@/composables/usePlaces'
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import useCategories from '../composables/useCategories'
import BaseSearchInput from '../components/ui/BaseSearchInput.vue'
import { useI18n } from 'vue-i18n'

const { listPlaces } = usePlaces()
const { listCategories } = useCategories()
const { t } = useI18n()

const categoriesWithPlaces = ref(null)

const loadData = async () => {
  try {
    const categories = await listCategories()
    const places = await listPlaces()

    categoriesWithPlaces.value = categories.map(category => {
      const filteredPlaces = places.filter(
        place => place.category === category.id,
      )
      return {
        ...category,
        places: filteredPlaces,
      }
    })
  } catch (error) {
    console.error(error)
  }
}

loadData()
</script>

<template>
  <BaseLayout class="pb-16">
    <BaseSearchInput class="mb-4" />
    <section
      v-for="category in categoriesWithPlaces"
      :key="category.id"
      class="mb-4"
    >
      <div class="flex justify-between">
        <h2 class="font-bold text-2xl">{{ category.name }}</h2>
        <router-link to="" class="font-bold text-success uppercase">
          {{ t('general.more') }}
        </router-link>
      </div>
      <div
        v-if="category.places.length"
        class="grid grid-cols-2 justify-items-center gap-5 p-3"
      >
        <BaseCard
          v-for="place in category.places"
          :key="place.id"
          :title="place.name"
          image-url="https://api.lorem.space/image/shoes?w=400&h=225"
        />
      </div>
      <p v-else class="text-center py-6">
        {{ t('general.haveNotPlaces') }}
      </p>
    </section>
  </BaseLayout>
</template>
