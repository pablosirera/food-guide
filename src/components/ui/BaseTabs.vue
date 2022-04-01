<script setup>
import { computed, ref } from 'vue'

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

const activeTab = ref(0)

const numberTabs = computed(() => {
  return props.tabs.length
})

const getTabActiveClass = tabId => {
  return { 'tab-active': tabId === activeTab.value }
}
const selectTab = tabId => {
  activeTab.value = tabId
}
</script>

<template>
  <div class="tabs">
    <router-link
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab tab-lifted h-14"
      :class="getTabActiveClass(index)"
      :to="tab.route"
      @click="selectTab(index)"
    >
      <template v-if="!useIcons">{{ tab.name }}</template>
      <component :is="tab.name" v-else class="h-8 w-8" />
    </router-link>
  </div>
</template>

<style scoped>
.tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.tabs .tab {
  width: calc(100% / v-bind(numberTabs));
}
.tabs .tab.tab-active:last-child::after {
  right: 0;
}
</style>
