<script setup>
import { ref } from 'vue'
import ImageCardsList from '@/components/ui/ImageCardsList.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import useCategories from '@/composables/useCategories'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = ref([])

const { listCategories } = useCategories()

const loadData = async () => {
  categories.value = await listCategories()
}

loadData()
</script>

<template>
  <BaseLayout class="p-3">
    <h2 class="text-3xl font-bold">{{ t('categories.choose') }}</h2>
    <ImageCardsList :items="categories" :show-add="true" />
  </BaseLayout>
</template>
