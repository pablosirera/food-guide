<script setup>
import { ref } from 'vue'
import ImageCardsList from '../components/ui/ImageCardsList.vue'
import BaseLayout from '@/components/layouts/BaseLayout.vue'

const categories = ref([])
</script>

<template>
  <BaseLayout class="p-3">
    <h2 class="text-3xl font-bold">Elige lista</h2>
    <ImageCardsList :items="categories" :show-add="true" />
  </BaseLayout>
</template>
