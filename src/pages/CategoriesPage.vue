<script setup>
import { ref } from 'vue'
import useCategories from '@/composables/useCategories'
import NewCategoryModal from '@/components/categories/NewCategoryModal.vue'

const { listCategories } = useCategories()
const categories = ref([])
const shouldShowCategoryModal = ref(false)

const loadData = async () => {
  try {
    categories.value = await listCategories()
  } catch (error) {
    console.error(error)
  }
}

const toggleModal = () => {
  shouldShowCategoryModal.value = !shouldShowCategoryModal.value
}

const updateCategories = category => {
  toggleModal()
  categories.value.push(category)
}

loadData()
</script>

<template>
  <BaseLayout class="pb-16">
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-xl">Tus listas</h2>
      <button class="btn btn-sm btn-outline btn-info" @click="toggleModal">
        Crear lista
      </button>
    </div>
    <div
      v-for="category in categories"
      :key="category.id"
      class="w-full flex items-center mb-4"
    >
      <figure
        v-if="category.image"
        class="w-14 h-14 flex items-center overflow-hidden"
      >
        <img :src="category.image" />
      </figure>
      <span v-else class="w-14 h-14 flex items-center justify-center">
        {{ category.emoji }}</span
      >
      <h2 class="ml-3 card-title">{{ category.name }}</h2>
    </div>
    <NewCategoryModal
      v-if="shouldShowCategoryModal"
      @close="toggleModal"
      @created="updateCategories"
    />
  </BaseLayout>
</template>
