<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import AddPlacesForm from '@/components/places/AddPlacesForm.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useCategories from '@/composables/useCategories'

const { t } = useI18n()
const categories = ref([])
const { listCategories } = useCategories()

const loadData = async () => {
  categories.value = await listCategories()
}
const addCategory = category => {
  categories.value.push(category)
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
    />
  </BaseLayout>
</template>
