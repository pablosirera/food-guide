<script setup>
import ImageFullCard from '@/components/ui/ImageFullCard.vue'
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  showAdd: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'normal',
  },
})
const emit = defineEmits(['card-add-clicked', 'select-item'])

const itemSelectedId = ref()

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
    <ImageFullCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :size="size"
      :selected="checkIfIsSelected(item.id)"
      @click="selectItem(item.id)"
    />
    <div v-if="showAdd" class="stats m-3" :class="size">
      <div class="stat bg-neutral">
        <a
          class="flex items-center justify-center cursor-pointer"
          @click="$emit('card-add-clicked')"
        >
          <PlusIcon class="h-8 w-8" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats.normal {
  @apply w-40 h-40;
}
.stats.small {
  @apply w-20 h-20 overflow-hidden;
}
.stats.small .stat {
  @apply w-20 h-20;
}
</style>
