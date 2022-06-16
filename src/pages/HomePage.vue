<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import usePlaces from '@/composables/usePlaces'
import useCategories from '@/composables/useCategories'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import ImageFullCardsList from '@/components/ui/ImageFullCardsList.vue'

const { listPlaces, listPlacesByCategory } = usePlaces()
const { listCategories } = useCategories()
const { t } = useI18n()

const categories = ref([])
const places = ref([])

const loadData = async () => {
  try {
    categories.value = await listCategories()
    places.value = await listPlaces()
  } catch (error) {
    console.error(error)
  }
}

const selectCategory = async category => {
  console.log(category)
  places.value = await listPlacesByCategory(category)
}

loadData()
</script>

<template>
  <BaseLayout class="pb-16">
    <BaseSearchInput class="mb-4" />
    <section>
      <ImageFullCardsList
        class="flex-nowrap min-w-max"
        size="small"
        :items="categories"
        @select-item="selectCategory"
      />
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
