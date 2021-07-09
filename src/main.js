import '@popperjs/core'
import 'bootstrap'
import '@/css/app.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
