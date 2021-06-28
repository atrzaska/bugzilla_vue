import '@/plugins'
import '@/css/app.scss'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')

window.app = app
