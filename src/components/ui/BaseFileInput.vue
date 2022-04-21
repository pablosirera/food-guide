<script setup>
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: 'image/*',
  },
})
const emit = defineEmits(['select-file'])

const fileName = ref('')

const selectFile = target => {
  fileName.value = target.files[0].name
  emit('select-file', target.files[0])
}
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <span v-if="fileName">{{ fileName }}</span>
    <button
      type="button"
      class="btn btn-md btn-accent btn-outline"
      @click="$refs.file.click()"
    >
      {{ label }}
    </button>
    <input
      ref="file"
      type="file"
      :accept="accept"
      class="hidden"
      @input="selectFile($event.target)"
    />
  </div>
</template>
