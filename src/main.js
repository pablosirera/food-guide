import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from './plugins/i18n'

// global components
import { HomeIcon, PlusIcon, UserIcon } from '@heroicons/vue/solid'

// global styles
import '@/assets/styles/main.css'

import '@/utils/colorsTheme'

const app = createApp(App).use(i18n).use(router)

app.component('HomeIcon', HomeIcon)
app.component('PlusIcon', PlusIcon)
app.component('UserIcon', UserIcon)

app.mount('#app')
