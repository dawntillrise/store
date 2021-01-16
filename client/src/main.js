
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/main.scss'

createApp(App).use(router).mount('#app')
