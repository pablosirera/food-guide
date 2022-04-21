<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import useCategories from '@/composables/useCategories'
import useBucket from '@/composables/useBucket'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BaseFileInput from '@/components/ui/BaseFileInput.vue'

const router = useRouter()
const { t } = useI18n()
const { createCategory } = useCategories()
const { uploadCategoryFile, getCategoryUrl } = useBucket()

const form = ref({
  name: '',
})
let categoryImage = ''

const handleSubmit = async () => {
  try {
    await createCategory({
      name: form.value.name,
      image: categoryImage,
    })
    router.push('/categories')
  } catch (error) {
    console.error(error.message)
  }
}

const returnToCategories = () => {
  router.push('/categories')
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
  <section class="p-3">
    <h2 class="text-3xl font-bold">{{ t('categories.new') }}</h2>
    <!-- TODO: create component with form -->
    <form class="mt-3" @submit.prevent="handleSubmit">
      <BaseInput v-model="form.name" :label="t('categories.listName')" />
      <BaseFileInput
        class="mt-4"
        :label="t('categories.uploadFile')"
        @select-file="selectFile"
      />
      <div class="mt-7">
        <button
          type="button"
          class="btn btn-md btn-error mt-6 mr-6"
          @click="returnToCategories"
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
  </section>
</template>
