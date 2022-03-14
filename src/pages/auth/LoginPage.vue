<script setup>
import { useI18n } from 'vue-i18n'
import SocialAuthButton from '@/components/auth/SocialAuthButton.vue'

const { t } = useI18n()
</script>

<template>
  <SocialAuthButton text="Iniciar sesión con google" />
  <div class="text-center">
    <router-link class="cursor-pointer" to="/auth/register">
      {{ t('auth.register') }}
    </router-link>
    <p>
      {{ t('auth.alreadyAccount') }}
      <a class="font-bold cursor-pointer">{{ t('auth.login') }}</a>
    </p>
  </div>
</template>
