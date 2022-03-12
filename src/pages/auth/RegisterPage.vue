<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const { t } = useI18n()

const form = ref({
  email: '',
  password: '',
})

const navigateToLogin = () => {
  router.push('/auth/login')
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

    <div class="mt-12 flex flex-col items-center">
      <button type="submit" class="btn btn-sm btn-outline btn-accent">
        {{ t('auth.createAccount') }}
      </button>
      <a class="cursor-pointer mt-3" @click="navigateToLogin()">
        {{ t('auth.login') }}
      </a>
    </div>
  </form>
</template>
