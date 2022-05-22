<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">
        <slot></slot>
      </span>
      <input
        :value="modelValue"
        type="checkbox"
        class="toggle"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
    </label>
  </div>
</template>
