import '@/plugins'
import '@/css/app.scss'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')

window.app = app
