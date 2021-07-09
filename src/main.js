import '@popperjs/core'
import 'bootstrap'
import '@/css/app.scss'

import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import fetchAccessToken from '@/services/jwt/fetchAccessToken'

fetchAccessToken().then(() => createApp(App).use(router).mount('#app'))
