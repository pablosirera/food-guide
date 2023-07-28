<script setup>
import { computed } from '@vue/runtime-core'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  size: {
    type: String,
    default: 'normal',
  },
  selected: {
    type: Boolean,
    default: false,
  },
  hasStyleSelected: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['click'])

const cardClasses = computed(() => {
  let allClasses = {
    [props.size]: true,
  }

  if (props.hasStyleSelected) {
    allClasses = { ...allClasses, selected: props.selected }
  }
  return allClasses
})
</script>

<template>
  <div
    class="card image-full cursor-pointer"
    :class="cardClasses"
    @click="$emit('click')"
  >
    <figure class="w-full h-full overflow-hidden">
      <img lazy :src="item.image" />
    </figure>
    <div class="card-body justify-center">
      <h2 class="card-title text-center justify-center">{{ item.name }}</h2>
    </div>
  </div>
</template>

<style scoped>
.selected {
  border: 2px solid theme('colors.primary');
}
.card.normal {
  @apply w-40 h-40;
}
.card.small {
  @apply w-20 h-20;
}
.card.small .card-body {
  padding: 0;
}
.card.small .card-title {
  @apply text-base;
}
</style>
