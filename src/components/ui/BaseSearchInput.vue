<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue', 'click'])

const query = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <!-- TODO: translate this placeholder -->
  <input
    v-model="query"
    type="text"
    placeholder="Buscar..."
    class="input input-bordered w-full rounded-lg"
    @click="$emit('click')"
  />
</template>
