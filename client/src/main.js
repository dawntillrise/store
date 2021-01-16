
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
