<script setup>
import ImageFullCard from '@/components/ui/ImageFullCard.vue'

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
defineEmits(['card-add-clicked'])
</script>

<template>
  <section class="flex flex-wrap">
    <ImageFullCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :size="size"
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
