<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
    validator: value => ['text', 'password', 'email'].includes(value),
  },
  modelValue: {
    type: String,
    default: '',
  },
  expanded: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['update:modelValue'])

const formControlInputClass = computed(() => {
  return {
    'max-w-xs': !props.expanded,
  }
})
</script>

<template>
  <div class="form-control w-full" :class="formControlInputClass">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="formControlInputClass"
      class="input input-bordered w-full"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
