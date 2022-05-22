<script setup>
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import ImageCardsList from '@/components/ui/ImageCardsList.vue'
import NewCategoryForm from '@/components/places/NewCategoryForm.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseToggle from '@/components/ui/BaseToggle.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['category-created'])

const { t } = useI18n()
const shouldShowCategoryForm = ref(false)
const isSearchPlace = ref(false)

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
    <BaseToggle v-model="isSearchPlace" class="mb-4">
      {{ t('places.new.searchPlace') }}
    </BaseToggle>
    <BaseSearchInput v-if="isSearchPlace" />
    <BaseInput v-else :placeholder="t('places.new.placeName')" />
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
    <BaseToggle v-model="isVisited" class="mb-4">
      {{ t('places.new.isVisited') }}
    </BaseToggle>
  </form>
</template>
