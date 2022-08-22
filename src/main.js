import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from './plugins/i18n'

// global components
import {
  HomeIcon,
  PlusIcon,
  UserIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/solid'
import BaseLayout from '@/components/layouts/BaseLayout.vue'

// global styles
import '@/assets/styles/main.css'

import '@/utils/colorsTheme'

createApp(App)
  .use(i18n)
  .use(router)
  .component('HomeIcon', HomeIcon)
  .component('PlusIcon', PlusIcon)
  .component('UserIcon', UserIcon)
  .component('ChevronLeftIcon', ChevronLeftIcon)
  .component('BaseLayout', BaseLayout)
  .mount('#app')
