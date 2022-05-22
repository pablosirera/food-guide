<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import AddPlacesForm from '@/components/places/AddPlacesForm.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useCategories from '@/composables/useCategories'
import usePlaces from '@/composables/usePlaces'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const categories = ref([])
const { listCategories } = useCategories()
const { createPlace } = usePlaces()
const router = useRouter()

const loadData = async () => {
  categories.value = await listCategories()
}
const addCategory = category => {
  categories.value.push(category)
}
const createFormPlace = async place => {
  try {
    await createPlace(place)
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}

loadData()
</script>

<template>
  <BaseLayout class="p-3">
    <h2 class="text-3xl font-bold">{{ t('places.new.title') }}</h2>
    <AddPlacesForm
      class="mt-8"
      :categories="categories"
      @category-created="addCategory"
      @create-place="createFormPlace"
    />
  </BaseLayout>
</template>
