import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/plugins'
import 'animate.css/animate.css'
import '@/css/app.scss'

const app = createApp(App)
app.use(store).use(router).mount('#app')

window.app = app
