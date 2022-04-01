<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="card w-40 h-40 m-3 shadow-xl image-full">
    <figure>
      <img :src="item.img" />
    </figure>
    <div class="card-body justify-center">
      <h2 class="card-title text-center justify-center">{{ item.name }}</h2>
    </div>
  </div>
</template>
