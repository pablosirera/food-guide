<script setup>
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import ImageCardsList from '@/components/ui/ImageCardsList.vue'
import NewCategoryForm from '@/components/places/NewCategoryForm.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['category-created'])

const { t } = useI18n()
const shouldShowCategoryForm = ref(false)

const showNewCategory = () => {
  shouldShowCategoryForm.value = true
}
const hideCategoryForm = () => {
  shouldShowCategoryForm.value = false
}
const createCategory = category => {
  hideCategoryForm()
  emit('category-created', category)
}
</script>

<template>
  <form novalidate>
    <BaseSearchInput />
    <section class="mt-7">
      <p>{{ t('places.new.selectList') }}</p>
      <div class="overflow-x-auto">
        <ImageCardsList
          class="flex-nowrap min-w-max"
          size="small"
          :items="categories"
          :show-add="true"
          @card-add-clicked="showNewCategory"
        />
      </div>

      <NewCategoryForm
        v-if="shouldShowCategoryForm"
        @cancel="hideCategoryForm"
        @category-created="createCategory"
      />
    </section>
  </form>
</template>
