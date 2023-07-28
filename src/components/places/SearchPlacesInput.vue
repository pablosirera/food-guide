<script setup>
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import { ref, watch } from 'vue'

const emit = defineEmits(['select-place'])

const query = ref('')
const suggestions = ref([])

watch(query, () => {
  setTimeout(async () => {
    const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&q=${encodeURI(
      query.value,
    )}`

    const response = await fetch(api)
    const { features } = await response.json()
    suggestions.value = features
  }, 2000)
})
const selectPlace = item => {
  // TODO: transform name properties item
  emit('select-place', item)
  suggestions.value = []
}
</script>

<template>
  <div class="dropdown dropdown-end w-full">
    <label tabindex="0">
      <BaseSearchInput v-model="query" />
    </label>

    <ul
      v-if="suggestions.length"
      tabindex="0"
      class="menu dropdown-content p-0 shadow bg-base-100 rounded-box w-full mt-2 left-0 border"
    >
      <li
        v-for="item in suggestions"
        :key="item.properties.place_id"
        class="border-b-2 cursor-pointer p-2 hover:bg-base-200"
        @click="selectPlace(item)"
      >
        {{ item.properties.display_name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu.dropdown-content li:last-child {
  border: 0;
}
.input-group .input {
  border-radius: var(--rounded-btn, 0.5rem) !important;
}
</style>
