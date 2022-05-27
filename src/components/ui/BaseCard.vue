<script setup>
import { computed } from 'vue'

const props = defineProps({
  isCompact: {
    type: Boolean,
    default: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
  altImage: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})

const cardClasses = computed(() => {
  return {
    'card-compact': props.isCompact,
  }
})
</script>

<template>
  <div class="card w-40 bg-base-200 shadow-xl" :class="cardClasses">
    <figure v-if="imageUrl">
      <img :src="imageUrl" :alt="altImage" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </div>
</template>
