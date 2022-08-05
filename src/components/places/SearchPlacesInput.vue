<script>
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import { ref } from 'vue'
import { usePlacesAutocomplete } from 'v-use-places-autocomplete'
import { useState } from '@/composables/useState'

export default {
  components: {
    BaseSearchInput,
  },
  emits: ['select-place'],
  setup(props, { emit }) {
    const query = ref('')
    const [menuOpen, setMenuOpen] = useState()

    const { suggestions } = usePlacesAutocomplete(query, {
      debounce: 500,
      minLengthAutocomplete: 3,
    })

    const selectPlace = item => {
      // TODO: transform name properties item
      emit('select-place', item)
      setMenuOpen(false)
    }

    return {
      query,
      suggestions,
      selectPlace,
      menuOpen,
      setMenuOpen,
    }
  },
}
</script>

<template>
  <div class="dropdown dropdown-end w-full">
    <label tabindex="0">
      <BaseSearchInput v-model="query" @click="setMenuOpen(true)" />
    </label>

    <ul
      v-if="menuOpen && suggestions.length"
      tabindex="0"
      class="menu dropdown-content p-0 shadow bg-base-100 rounded-box w-full mt-2 left-0 border"
    >
      <li
        v-for="item in suggestions"
        :key="item.place_id"
        class="border-b-2 cursor-pointer p-2 hover:bg-base-200"
        @click="selectPlace(item)"
      >
        {{ item.description }}
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
