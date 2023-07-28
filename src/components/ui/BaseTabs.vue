<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  useIcons: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()

const numberTabs = computed(() => {
  return props.tabs.length
})

const getTabActiveClass = tabRoute => {
  return { 'tab-active': tabRoute === route.path }
}
</script>

<template>
  <div class="tabs tabs-boxed">
    <router-link
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab h-14 cursor-pointer"
      :class="getTabActiveClass(tab.route)"
      :to="tab.route"
    >
      <template v-if="!useIcons">{{ tab.name }}</template>
      <component :is="tab.name" v-else class="h-8 w-8" />
    </router-link>
  </div>
</template>

<style scoped>
.tabs {
  position: sticky;
  bottom: 0;
  width: 100%;
  left: 0;
}
.tabs .tab {
  width: calc(100% / v-bind(numberTabs));
}
.tabs .tab.tab-active:last-child::after {
  right: 0;
}
</style>
