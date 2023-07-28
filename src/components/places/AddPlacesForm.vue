<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseToggle from '@/components/ui/BaseToggle.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import SearchPlacesInput from '@/components/places/SearchPlacesInput.vue'

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['create-place'])

const { t } = useI18n()
const isManuallyPlace = ref(false)
const isVisited = ref(false)
const placeForm = ref({})
const categorySelected = ref(null)
const selectedPlace = ref(null)

const submitForm = () => {
  emit('create-place', {
    name: placeForm.value.name,
    visited: isVisited.value,
    category: categorySelected.value,
    placeId: selectedPlace.value && selectedPlace.value.properties.place_id,
  })
}

const selectPlace = item => {
  selectedPlace.value = item
  placeForm.value.name =
    selectedPlace.value && selectedPlace.value.properties.display_name
}
</script>

<template>
  <form novalidate @submit.prevent="submitForm">
    <BaseToggle v-model="isManuallyPlace">
      {{ t('places.new.searchPlace') }}
    </BaseToggle>
    <SearchPlacesInput v-if="!isManuallyPlace" @select-place="selectPlace" />
    <BaseInput
      v-else
      v-model="placeForm.name"
      :placeholder="t('places.new.placeName')"
    />

    <BaseInput
      v-if="selectedPlace"
      v-model="placeForm.name"
      label="Nombre de tu sitio"
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
