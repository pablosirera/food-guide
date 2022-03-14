<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['close-form', 'login'])

const { t } = useI18n()

const form = ref({
  email: '',
  password: '',
})

const handleSubmit = () => {
  emit('login', form.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <BaseInput v-model="form.email" :label="t('auth.email')" type="email" />
    <BaseInput
      v-model="form.password"
      :label="t('auth.pass')"
      type="password"
    />

    <div class="mt-12 flex justify-around items-center">
      <button type="submit" class="btn btn-sm btn-outline btn-accent">
        {{ t('auth.login') }}
      </button>
      <button
        class="btn btn-sm btn-outline btn-warning"
        @click="$emit('close-form')"
      >
        {{ t('auth.return') }}
      </button>
    </div>
  </form>
</template>
