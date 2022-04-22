<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  size: {
    type: String,
    default: 'normal',
  },
})
</script>

<template>
  <div class="card m-3 image-full cursor-pointer" :class="size">
    <figure class="w-full h-full overflow-hidden">
      <img :src="item.image" />
    </figure>
    <div class="card-body justify-center">
      <h2 class="card-title text-center justify-center">{{ item.name }}</h2>
    </div>
  </div>
</template>

<style scoped>
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
