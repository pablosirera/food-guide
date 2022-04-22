<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import useCategories from '@/composables/useCategories'
import useBucket from '@/composables/useBucket'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseFileInput from '@/components/ui/BaseFileInput.vue'

const emit = defineEmits(['cancel', 'category-created'])

const { t } = useI18n()
const { createCategory } = useCategories()
const { uploadCategoryFile, getCategoryUrl } = useBucket()

const form = ref({
  name: '',
})
let categoryImage = ''

const handleSubmit = async () => {
  try {
    const data = await createCategory({
      name: form.value.name,
      image: categoryImage,
    })
    emit('category-created', data[0])
  } catch (error) {
    console.error(error.message)
  }
}

const cancelCreate = () => {
  emit('cancel')
}
const selectFile = async file => {
  try {
    const data = await uploadCategoryFile(file)
    const { publicURL } = await getCategoryUrl(data.Key.split('/').pop())

    categoryImage = publicURL
  } catch (error) {
    console.error(error.message)
  }
}
</script>

<template>
  <form class="mt-3" @submit.prevent="handleSubmit">
    <BaseInput v-model="form.name" :label="t('categories.listName')" />
    <BaseFileInput
      class="mt-4"
      :label="t('categories.uploadFile')"
      @select-file="selectFile"
    />
    <div class="mt-3">
      <button
        type="button"
        class="btn btn-md btn-error mt-6 mr-6"
        @click="cancelCreate"
      >
        {{ t('general.cancel') }}
      </button>
      <button
        type="submit"
        class="btn btn-md btn-info mt-6"
        :disabled="!form.name"
      >
        {{ t('general.create') }}
      </button>
    </div>
  </form>
</template>
