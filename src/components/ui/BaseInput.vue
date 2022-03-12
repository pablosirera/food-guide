<script setup>
defineProps({
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
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered w-full max-w-xs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
