import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default createI18n({
  legacy: false,
  locale: window ? window.navigator.language.substring(0, 2) : 'es',
  fallbackLocale: 'en',
  messages,
})
