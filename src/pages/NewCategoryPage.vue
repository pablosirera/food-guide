<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import useCategories from '@/composables/useCategories'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const { createCategory } = useCategories()

const form = ref({
  name: '',
})

const handleSubmit = async () => {
  try {
    const data = await createCategory({ name: form.value.name })
    console.log(data)
    router.push('/categories')
  } catch (error) {
    console.error(error.message)
  }
}

const returnToCategories = () => {
  router.push('/categories')
}
</script>

<template>
  <section class="p-3">
    <h2 class="text-3xl font-bold">{{ t('categories.new') }}</h2>
    <form class="mt-3" @submit.prevent="handleSubmit">
      <BaseInput v-model="form.name" :label="t('categories.listName')" />
      <button
        type="button"
        class="btn btn-md btn-warning mt-6 mr-6"
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
    </form>
  </section>
</template>
