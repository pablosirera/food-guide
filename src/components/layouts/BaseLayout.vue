<script setup>
import BaseTabs from '@/components/ui/BaseTabs.vue'

const tabs = [
  {
    name: 'HomeIcon',
    route: '/',
    slot: 'tab-1',
  },
  {
    name: 'PlusIcon',
    route: '/places/new',
    slot: 'tab-2',
  },
  {
    name: 'UserIcon',
    route: '/profile',
    slot: 'tab-3',
  },
]
</script>

<template>
  <slot name="header"></slot>
  <main class="p-4 h-screen">
    <slot></slot>
  </main>
  <BaseTabs :tabs="tabs" :use-icons="true" />
</template>
