<script setup>
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseToggle from '@/components/ui/BaseToggle.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['create-place'])

const { t } = useI18n()
const isSearchPlace = ref(false)
const isVisited = ref(false)
const place = ref({})
const categorySelected = ref(null)

const submitForm = () => {
  emit('create-place', {
    name: place.value.name,
    visited: isVisited.value,
    category: categorySelected.value,
  })
}
</script>

<template>
  <form novalidate @submit.prevent="submitForm">
    <BaseToggle v-model="isSearchPlace">
      {{ t('places.new.searchPlace') }}
    </BaseToggle>
    <BaseSearchInput v-if="isSearchPlace" />
    <BaseInput
      v-else
      v-model="place.name"
      :placeholder="t('places.new.placeName')"
    />
    <section class="mt-6">
      <p>{{ t('places.new.selectList') }}</p>
      <BaseSelect v-model="categorySelected" :options="categories">
        <option selected disabled>Tus listas</option>
      </BaseSelect>
    </section>
    <BaseToggle v-model="isVisited" class="mb-4">
      {{ t('places.new.isVisited') }}
    </BaseToggle>

    <div class="mt-6">
      <button type="submit" class="btn btn-md btn-outline btn-accent">
        {{ t('places.new.createPlace') }}
      </button>
    </div>
  </form>
</template>
