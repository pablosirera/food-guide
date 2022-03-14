<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import useAuthUser from '@/composables/useAuthUser'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const { register } = useAuthUser()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    await register(form.value)

    router.push({ name: 'HomePage' })
    // router.push({
    //   name: 'EmailConfirmation',
    //   query: { email: form.value.email },
    // })
  } catch (error) {
    console.error(error.message)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <BaseInput v-model="form.name" :label="t('auth.name')" />
    <BaseInput v-model="form.email" :label="t('auth.email')" type="email" />
    <BaseInput
      v-model="form.password"
      :label="t('auth.pass')"
      type="password"
    />

    <div class="mt-12 flex flex-col items-center">
      <button type="submit" class="btn btn-sm btn-outline btn-accent">
        {{ t('auth.createAccount') }}
      </button>
      <router-link to="/auth/login" class="cursor-pointer mt-3">
        {{ t('auth.login') }}
      </router-link>
    </div>
  </form>
</template>
