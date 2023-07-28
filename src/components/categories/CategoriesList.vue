<script setup>
import ImageFullCardsList from '@/components/ui/ImageFullCardsList.vue'
import ImageFullCard from '@/components/ui/ImageFullCard.vue'
import useCategories from '@/composables/useCategories'
import { ref } from 'vue'

const emit = defineEmits(['select-category'])

const { listCategories } = useCategories()
const categories = ref([])

const loadData = async () => {
  try {
    categories.value = await listCategories()
  } catch (error) {
    console.error(error)
  }
}

const selectCategory = category => {
  emit('select-category', category)
}

loadData()
</script>

<template>
  <ImageFullCardsList
    size="small"
    :items="categories"
    @select-item="selectCategory"
  >
    <template #first>
      <ImageFullCard
        size="small"
        :item="{ name: 'Todos' }"
        @click="selectCategory('all')"
      />
    </template>
  </ImageFullCardsList>
</template>
