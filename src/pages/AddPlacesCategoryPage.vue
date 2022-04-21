<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import AddPlacesForm from '@/components/places/AddPlacesForm.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <BaseLayout class="p-3">
    <h2 class="text-3xl font-bold">{{ t('places.new.title') }}</h2>
    <AddPlacesForm class="mt-8" />
  </BaseLayout>
</template>
