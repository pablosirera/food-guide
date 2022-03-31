<script setup>
import { useI18n } from 'vue-i18n'
import SocialAuthButton from '@/components/auth/SocialAuthButton.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import { ref } from 'vue'
import useAuthUser from '@/composables/useAuthUser'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const { login, loginWithSocialProvider } = useAuthUser()

const loginFormIsVisible = ref(false)

const showLoginForm = () => {
  loginFormIsVisible.value = true
}
const closeLoginForm = () => {
  loginFormIsVisible.value = false
}

const handleLogin = async ({ form, provider }) => {
  try {
    provider ? await loginWithSocialProvider(provider) : await login(form)
    router.push({ name: 'HomePage' })
  } catch (error) {
    console.error(error.message)
  }
}
</script>

<template>
  <template v-if="!loginFormIsVisible">
    <SocialAuthButton
      text="Iniciar sesión con google"
      @click="handleLogin({ provider: 'google' })"
    />
    <div class="text-center">
      <router-link class="cursor-pointer" to="/auth/register">
        {{ t('auth.register') }}
      </router-link>
      <p>
        {{ t('auth.alreadyAccount') }}
        <a class="font-bold cursor-pointer" @click="showLoginForm()">
          {{ t('auth.login') }}
        </a>
      </p>
    </div>
  </template>
  <template v-else>
    <LoginForm
      @login="handleLogin({ form: $event })"
      @close-form="closeLoginForm()"
    />
  </template>
</template>
