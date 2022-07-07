<script setup>
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { VuemojiPicker } from 'vuemoji-picker'
import { computed, ref } from 'vue'
import useCategories from '@/composables/useCategories'

const emit = defineEmits(['close', 'created'])

const { createCategory } = useCategories()
const listName = ref('')
const emojiSelected = ref('')

const isButtonDisabled = computed(() => {
  return !listName.value || !emojiSelected.value
})

const handleEmojiClick = detail => {
  emojiSelected.value = detail.unicode
}
const handleSubmit = async () => {
  try {
    const data = await createCategory({
      name: listName.value,
      emoji: emojiSelected.value,
    })

    emit('created', data[0])
  } catch (error) {
    console.error(error.message)
  }
}
</script>

<template>
  <BaseModal :show-close="true" @close="emit('close')">
    <h3 class="font-bold text-lg">Crea tu nueva lista</h3>
    <p class="text-gray-500 mb-6">
      Añade una nueva lista para organizar tus sitios mejor
    </p>

    <BaseInput
      v-model="listName"
      placeholder="Nombre de la lista"
      :expanded="true"
      class="mb-4"
    />

    <label>Elige emoji para tu lista: {{ emojiSelected }}</label>
    <VuemojiPicker locale="es" @emoji-click="handleEmojiClick" />

    <template #actions>
      <button
        class="btn btn-sm btn-accent"
        :disabled="isButtonDisabled"
        @click="handleSubmit"
      >
        Crear
      </button>
    </template>
  </BaseModal>
</template>

<style>
emoji-picker {
  width: 100%;
  height: 330px;
}
:deep(.picker) {
  border-radius: 8px;
}
</style>
