import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/style.css'
import { MotionPlugin } from '@vueuse/motion'
import { plugin, defaultConfig } from '@formkit/vue'
import { fr } from '@formkit/i18n'
import '@formkit/themes/genesis'

const config = {
  locales: { fr },
  locale: 'fr',
}

export default config

createApp(App).use(store).use(router).use(MotionPlugin).use(plugin, defaultConfig).mount('#app')
