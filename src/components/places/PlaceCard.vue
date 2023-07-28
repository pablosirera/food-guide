<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})

const { t } = useI18n()
</script>

<template>
  <div class="flex rounded shadow-xl cursor-pointer hover:shadow-2xl">
    <img
      class="w-20 h-20 object-cover mr-2 rounded-l-md"
      :src="
        item.img ||
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      "
    />
    <div class="py-2">
      <h2>{{ item.name }}</h2>
      <div v-if="item.visited" class="badge badge-secondary">
        {{ t('places.visited') }}
      </div>
    </div>
  </div>
</template>
