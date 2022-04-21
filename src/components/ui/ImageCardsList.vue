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
})
defineEmits(['card-clicked'])
</script>

<template>
  <section class="flex flex-wrap justify-between sm:justify-center">
    <ImageFullCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      @card-clicked="$emit('card-clicked', $event)"
    />
    <div v-if="showAdd" class="stats shadow m-3 w-40 h-40">
      <div class="stat bg-neutral">
        <router-link
          to="/categories/new"
          class="flex items-center justify-center cursor-pointer"
        >
          <PlusIcon class="h-8 w-8" />
        </router-link>
      </div>
    </div>
  </section>
</template>
