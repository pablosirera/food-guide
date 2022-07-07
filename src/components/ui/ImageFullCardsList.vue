<script setup>
import ImageFullCard from '@/components/ui/ImageFullCard.vue'
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'normal',
  },
  hasStyleSelected: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['select-item'])

const itemSelectedId = ref(null)

const checkIfIsSelected = itemId => {
  return itemSelectedId.value === itemId
}
const selectItem = item => {
  itemSelectedId.value = item
  emit('select-item', item)
}
</script>

<template>
  <section class="flex flex-wrap">
    <slot name="first" />
    <ImageFullCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :size="size"
      :has-style-selected="hasStyleSelected"
      :selected="checkIfIsSelected(item.id)"
      @click="selectItem(item.id)"
    />
  </section>
</template>
