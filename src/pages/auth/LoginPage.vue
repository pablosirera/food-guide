<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SocialAuthButton from '@/components/auth/SocialAuthButton.vue'

const router = useRouter()
const { t } = useI18n()

const showRegister = () => {
  router.push('/auth/register')
}
</script>

<template>
  <SocialAuthButton text="Iniciar sesión con google" />
  <div class="text-center">
    <a class="cursor-pointer" @click="showRegister()">
      {{ t('auth.register') }}
    </a>
    <p>
      {{ t('auth.alreadyAccount') }}
      <a class="font-bold cursor-pointer">{{ t('auth.login') }}</a>
    </p>
  </div>
</template>
